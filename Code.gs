const SHEET_NAME = 'Hasil Kuis';
const TOTAL_QUESTIONS = 25;

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Request tidak berisi data.');
    }

    const data = JSON.parse(e.postData.contents);
    validateQuizResult(data);

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    if (!spreadsheet) {
      throw new Error('Apps Script harus terhubung ke Google Spreadsheet.');
    }

    const sheet = spreadsheet.getSheetByName(SHEET_NAME)
      || spreadsheet.insertSheet(SHEET_NAME);
    const questionHeaders = Array.from(
      { length: TOTAL_QUESTIONS },
      (_, index) => `Soal_${index + 1}`
    );
    const headers = [
      'Timestamp',
      'Nama',
      'Kelas',
      'Nilai',
      'Benar',
      'Total Soal',
      ...questionHeaders
    ];

    ensureHeaders(sheet, headers);

    const sheetHeaders = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const valuesByHeader = {
      Timestamp: new Date(),
      Nama: safeSheetValue(data.nama.trim()),
      Kelas: safeSheetValue(data.kelas.trim()),
      Nilai: Number(data.nilai),
      Benar: Number(data.benar),
      'Total Soal': TOTAL_QUESTIONS
    };
    questionHeaders.forEach((header) => {
      valuesByHeader[header] = safeSheetValue(data[header]);
    });
    const row = sheetHeaders.map((header) => valuesByHeader[header] ?? '');

    sheet.appendRow(row);
    return jsonResponse({ ok: true, message: 'Hasil kuis berhasil disimpan.' });
  } catch (error) {
    return jsonResponse({ ok: false, message: error.message });
  } finally {
    if (lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function validateQuizResult(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Format data kuis tidak valid.');
  }

  if (typeof data.nama !== 'string' || !data.nama.trim()) {
    throw new Error('Nama peserta wajib diisi.');
  }
  if (typeof data.kelas !== 'string' || !data.kelas.trim()) {
    throw new Error('Kelas peserta wajib diisi.');
  }
  if (!Number.isFinite(Number(data.nilai)) || Number(data.nilai) < 0 || Number(data.nilai) > 100) {
    throw new Error('Nilai kuis tidak valid.');
  }
  if (!Number.isInteger(Number(data.benar)) || Number(data.benar) < 0 || Number(data.benar) > TOTAL_QUESTIONS) {
    throw new Error('Jumlah jawaban benar tidak valid.');
  }
  if (Number(data.totalSoal) !== TOTAL_QUESTIONS) {
    throw new Error(`Jumlah soal harus ${TOTAL_QUESTIONS}.`);
  }

  for (let questionNumber = 1; questionNumber <= TOTAL_QUESTIONS; questionNumber++) {
    const answer = data[`Soal_${questionNumber}`];
    if (!['A', 'B', 'C', 'D', 'E', '-'].includes(answer)) {
      throw new Error(`Jawaban Soal_${questionNumber} tidak valid.`);
    }
  }
}

function ensureHeaders(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
    return;
  }

  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const existingHeaders = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const missingHeaders = headers.filter((header) => !existingHeaders.includes(header));

  if (missingHeaders.length > 0) {
    sheet.getRange(1, lastColumn + 1, 1, missingHeaders.length).setValues([missingHeaders]);
  }
}

function safeSheetValue(value) {
  if (typeof value === 'string' && /^[=+\-@]/.test(value)) {
    return `'${value}`;
  }
  return value;
}

function jsonResponse(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
