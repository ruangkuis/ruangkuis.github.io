    const questionsData = [
        {
            "num": 1,
            "q": "Seorang teknisi jaringan sedang membuat kabel UTP standar T568B untuk menghubungkan PC client ke Switch managed. Urutan warna kabel UTP yang benar dari pin 1 hingga pin 8 adalah...",
            "opts": ["A. Putih Orange - Orange - Putih Hijau - Biru - Putih Biru - Hijau - Putih Cokelat - Cokelat", "B. Putih Hijau - Hijau - Putih Orange - Biru - Putih Biru - Orange - Putih Cokelat - Cokelat", "C. Putih Orange - Orange - Putih Hijau - Hijau - Putih Biru - Biru - Putih Cokelat - Cokelat", "D. Putih Biru - Biru - Putih Orange - Orange - Putih Hijau - Hijau - Putih Cokelat - Cokelat", "E. Putih Cokelat - Cokelat - Putih Hijau - Biru - Putih Biru - Hijau - Putih Orange - Orange"],
            "ans": "A"
        },
        {
            "num": 2,
            "q": "Saat menguji kabel UTP Straight-Through menggunakan LAN Tester, semua lampu LED menyala berurutan dari 1 sampai 8 pada kedua sisi, kecuali LED nomor 4 dan 6 yang tidak menyala. Masalah teknis yang paling mungkin terjadi adalah...",
            "opts": ["A. Terjadi sirkuit pendek (short circuit) antara kabel warna biru dan cokelat", "B. Pin nomor 4 (Biru) dan pin nomor 6 (Hijau) putus atau tidak ter-crimping dengan sempurna di RJ-45", "C. Penggunaan susunan kabel T568A pada satu sisi dan T568B pada sisi lainnya", "D. Kabel mengalami attenuasi akibat panjang kabel melebihi 100 meter", "E. Kabel yang digunakan adalah tipe STP (Shielded Twisted Pair) tanpa grounding"],
            "ans": "B"
        },
        {
            "num": 3,
            "q": "Pada pemasangan kabel Fiber Optik di jaringan FTTH, alat yang digunakan untuk memotong ujung core serat optik secara presisi dengan sudut 90 derajat sebelum dimasukkan ke dalam Fusion Splicer adalah...",
            "opts": ["A. Miller Stripper / Fiber Stripper", "B. Optical Power Meter (OPM)", "C. Fiber Optic Cleaver", "D. Visual Fault Locator (VFL)", "E. Optical Time Domain Reflectometer (OTDR)"],
            "ans": "C"
        },
        {
            "num": 4,
            "q": "Teknisi jaringan hendak memasang Access Point outdoor pada tiang tower setinggi 15 meter. Untuk menyalurkan daya listrik sekaligus data internet melalui satu kabel UTP yang sama menuju Access Point, teknologi yang wajib digunakan adalah...",
            "opts": ["A. Dynamic Host Configuration Protocol (DHCP)", "B. Power over Ethernet (PoE / IEEE 802.3af/at)", "C. Power Line Communication (PLC)", "D. Uninterruptible Power Supply (UPS) Online", "E. Optical Network Terminal (ONT)"],
            "ans": "B"
        },
        {
            "num": 5,
            "q": "Dalam merencanakan tata ruang server (Data Center Rack Server), perangkat jaringan seperti Patch Panel, Switch, dan Router dipasang pada struktur rak standar. Berapakah ukuran standar lebar rak server tersebut?",
            "opts": ["A. 10 Inci", "B. 15 Inci", "C. 19 Inci", "D. 24 Inci", "E. 32 Inci"],
            "ans": "C"
        },
        {
            "num": 6,
            "q": "Administrator jaringan ingin mengisolasi traffic antar departemen pada satu unit Switch managed 24-port. Port 1-10 dialokasikan untuk Departemen HRD (VLAN 10) dan Port 11-20 untuk Departemen Keuangan (VLAN 20). Jenis mode port yang dikonfigurasi pada Port 1 sampai 20 tersebut dinamakan...",
            "opts": ["A. Trunk Port", "B. Access Port", "C. Hybrid Port", "D. Mirror Port / SPAN", "E. Promiscuous Port"],
            "ans": "B"
        },
        {
            "num": 7,
            "q": "Di Switch Cisco Catalyst, perintah CLI yang tepat untuk menetapkan port FastEthernet 0/5 menjadi anggota VLAN 30 adalah...",
            "opts": ["A. `switchport mode trunk` dilanjutkan `switchport trunk allowed vlan 30`", "B. `switchport mode access` dilanjutkan `switchport access vlan 30`", "C. `vlan 30 enable` dilanjutkan `interface fa0/5 assign`", "D. `ip address 192.168.30.1 255.255.255.0` pada interface fa0/5", "E. `encapsulation dot1q 30` pada interface fa0/5"],
            "ans": "B"
        },
        {
            "num": 8,
            "q": "Untuk menghubungkan VLAN 10 dan VLAN 20 agar dapat saling berkomunikasi melalui satu interface fisik Router yang terhubung ke Switch (metode Router-on-a-Stick), fitur utama yang harus dikonfigurasi pada Router adalah...",
            "opts": ["A. Virtual Router Redundancy Protocol (VRRP)", "B. Sub-Interface dengan Enkapsulasi IEEE 802.1Q", "C. Port Forwarding / Destination NAT", "D. Network Address Translation (NAT) Masquerade", "E. Spanning Tree Protocol (STP)"],
            "ans": "B"
        },
        {
            "num": 9,
            "q": "Di RouterOS MikroTik, administrator hendak mengonfigurasi IP Address `192.168.50.1/24` pada interface `ether2-LAN`. Sintaks perintah CLI MikroTik yang benar adalah...",
            "opts": ["A. `/ip address add address=192.168.50.1/24 interface=ether2-LAN`", "B. `/ip set address=192.168.50.1 netmask=255.255.255.0 interface=ether2-LAN`", "C. `/interface ether2 set ip=192.168.50.1/24`", "D. `/ip route add dst-address=192.168.50.1/24 gateway=ether2-LAN`", "E. `/ip dhcp-server add address=192.168.50.1/24 interface=ether2-LAN`"],
            "ans": "A"
        },
        {
            "num": 10,
            "q": "Sebuah jaringan lokal membutuhkan jalur koneksi internet. Router MikroTik terhubung ke ISP di interface `ether1-WAN`. Agar seluruh host di jaringan lokal (`ether2-LAN`) dapat mengakses internet menggunakan satu IP Publik ISP, rule NAT yang wajib ditambahkan adalah...",
            "opts": ["A. `/ip firewall nat add chain=dstnat in-interface=ether1-WAN action=redirect`", "B. `/ip firewall nat add chain=srcnat out-interface=ether1-WAN action=masquerade`", "C. `/ip firewall nat add chain=srcnat in-interface=ether2-LAN action=accept`", "D. `/ip firewall nat add chain=dstnat dst-port=80 action=passthrough`", "E. `/ip firewall nat add chain=output out-interface=ether1-WAN action=log`"],
            "ans": "B"
        },
        {
            "num": 11,
            "q": "Administrator ingin mengonfigurasi DHCP Server di Router MikroTik agar secara otomatis memberikan IP Address kepada client di range `192.168.10.10` hingga `192.168.10.100`. Fitur di MikroTik yang digunakan untuk menentukan batasan rentang IP tersebut dinamakan...",
            "opts": ["A. IP Lease Time", "B. IP Pool", "C. IP Address List", "D. IP Neighbor", "E. IP Binding"],
            "ans": "B"
        },
        {
            "num": 12,
            "q": "Manakah perintah CLI MikroTik yang digunakan untuk menambahkan Default Route (jalur utama ke internet) dengan IP Gateway ISP `103.10.1.1`?",
            "opts": ["A. `/ip route add dst-address=0.0.0.0/0 gateway=103.10.1.1`", "B. `/ip route add dst-address=192.168.1.0/24 gateway=103.10.1.1`", "C. `/ip address add address=103.10.1.1/30 interface=ether1`", "D. `/ip firewall filter add chain=forward gateway=103.10.1.1`", "E. `/ip gateway set default=103.10.1.1`"],
            "ans": "A"
        },
        {
            "num": 13,
            "q": "Di dalam konfigurasi Routing Dinamis OSPF, dua router yang terhubung langsung tidak dapat membentuk hubungan ketetanggaan (OSPF Neighbor / Adjacency State). Faktor konfigurasi yang PALING MUNGKIN menjadi penyebab kegagalan tersebut adalah...",
            "opts": ["A. Nilai MTU kedua interface sama", "B. Perbedaan Hello Interval dan Dead Interval pada interface kedua router", "C. Kedua router berada di dalam OSPF Area yang sama (Area 0)", "D. Menggunakan subnet mask /30 yang sama", "E. Router ID kedua router bernilai unik dan berbeda"],
            "ans": "B"
        },
        {
            "num": 14,
            "q": "Pada konfigurasi Access Point Wireless Wi-Fi, metode pengamanan jaringan nirkabel yang mengombinasikan enkripsi AES (Advanced Encryption Standard) dengan autentikasi kunci rahasia bersama dinamakan...",
            "opts": ["A. WEP (Wired Equivalent Privacy) Open", "B. WPA-PSK dengan TKIP", "C. WPA2-PSK (Pre-Shared Key) dengan AES / CCMP", "D. MAC Address Filtering tanpa password", "E. SSID Broadcast Disabling"],
            "ans": "C"
        },
        {
            "num": 15,
            "q": "Teknisi memasang dua unit Access Point untuk meng-cover area koridor sekolah yang panjang. Agar pengguna Wi-Fi dapat berpindah posisi dari AP-1 ke AP-2 tanpa mengalami putus koneksi (seamless roaming), hal penting yang harus disamakan pada kedua Access Point adalah...",
            "opts": ["A. Nomor Channel frekuensi dan IP Address LAN", "B. SSID, Security Key/Password, dan Tipe Enkripsi yang identik (tetapi Channel frekuensi dibedakan)", "C. MAC Address fisik dan Tx Power", "D. Subnet Mask dan Hostname AP", "E. Port PoE dan Merk/Brand perangkat"],
            "ans": "B"
        },
        {
            "num": 16,
            "q": "Seorang Network Administrator hendak melakukan pembatasan (limiting) kecepatan download 5 Mbps dan upload 2 Mbps khusus untuk IP Client `192.168.20.15` di MikroTik. Fitur manajemen bandwidth yang paling mudah dan cepat untuk skenario tersebut adalah...",
            "opts": ["A. Simple Queue", "B. Queue Tree dengan Mangle", "C. Web Proxy Access Control", "D. Hotspot User Profile Walled Garden", "E. Traffic Monitor Alert"],
            "ans": "A"
        },
        {
            "num": 17,
            "q": "Di Router MikroTik, administrator ingin menutup total akses ping (ICMP) dari luar (WAN) yang mengarah langsung ke IP Router, namun lalu lintas ping antar client di LAN tetap diizinkan. Rule Filter Firewall yang tepat adalah...",
            "opts": ["A. `chain=forward in-interface=ether1-WAN protocol=icmp action=drop`", "B. `chain=input in-interface=ether1-WAN protocol=icmp action=drop`", "C. `chain=output out-interface=ether1-WAN protocol=icmp action=drop`", "D. `chain=srcnat out-interface=ether1-WAN protocol=icmp action=masquerade`", "E. `chain=dstnat in-interface=ether1-WAN protocol=icmp action=accept`"],
            "ans": "B"
        },
        {
            "num": 18,
            "q": "Dalam mengamankan Switch Layer 2 dari ancaman perangkat tidak dikenal yang dicolokkan ke port switch, fitur Port Security dikonfigurasi dengan opsi `violation shutdown`. Apa yang terjadi jika ada laptop asing dengan MAC Address tidak terdaftar mencoba terhubung ke port tersebut?",
            "opts": ["A. Port akan tetap aktif dan memberikan IP DHCP secara otomatis", "B. Port akan langsung mati (disabled/err-disabled) dan mengirim peringatan log", "C. Port akan mengubah kecepatannya dari 1 Gbps menjadi 10 Mbps", "D. Port akan mengalihkan traffic laptop tersebut ke Native VLAN", "E. Port akan memblokir paket ICMP saja namun mengizinkan paket HTTP"],
            "ans": "B"
        },
        {
            "num": 19,
            "q": "Seorang teknisi melakukan pengujian konektivitas hasil konfigurasi router menggunakan utilitas `ping 192.168.1.1`. Hasil keluaran menunjukkan pesan `Destination Host Unreachable`. Arti dari pesan kesalahan tersebut adalah...",
            "opts": ["A. Paket data berhasil sampai ke tujuan tetapi waktu tanggapan terlalu lambat", "B. Router lokal tidak menemukan rute (route entry) atau ARP ke alamat IP tujuan", "C. Port aplikasi di komputer tujuan ditutup oleh Firewall internal host", "D. Terjadi tabrakan paket data (collision) di media kabel UTP", "E. Alamat IP tujuan sedang digunakan oleh dua komputer sekaligus (IP Conflict)"],
            "ans": "B"
        },
        {
            "num": 20,
            "q": "Setelah menyelesaikan konfigurasi perangkat Router dan Switch pada jaringan Enterprise, tindakan dokumentasi teknis yang wajib dilakukan oleh network engineer untuk mempermudah perawatan (maintenance) di masa depan adalah...",
            "opts": ["A. Mengubah seluruh password router menjadi default 'admin'", "B. Membuat Topologi Jaringan, Pengabelan Labeling, dan Tabel Alokasi IP Address (IP Addressing Plan)", "C. Menghapus seluruh file log aktivitas sistem di router", "D. Mematikan fitur SSH dan Telnet serta mencabut kabel console", "E. Menyimpan file cadangan (backup) konfigurasi hanya di dalam memori flash router itu sendiri"],
            "ans": "B"
        },
        {
            "num": 21,
            "q": "Untuk mendeteksi keretakan, patahan, atau kebocoran sinyal cahaya pada kabel Fiber Optik dalam jarak pendek (patch cord/drop core), teknisi menggunakan alat penguji Visual Fault Locator (VFL). Sinyal yang dipancarkan oleh VFL ke dalam core adalah...",
            "opts": ["A. Sinar Laser Merah tampak (Visible Red Laser) dengan panjang gelombang ±650 nm", "B. Sinar Inframerah tak tampak dengan panjang gelombang 1310 nm", "C. Gelombang Radio Frekuensi 2.4 GHz", "D. Sinar Ultraviolet (UV) intensitas tinggi", "E. Pulsa Listrik DC 12 Volt"],
            "ans": "A"
        },
        {
            "num": 22,
            "q": "Konektor Fiber Optik berbentuk persegi (push-pull latching mechanism) yang sangat populer digunakan pada modul SFP Media Converter dan perangkat ODP/OTB di jaringan FTTH adalah konektor tipe...",
            "opts": ["A. ST (Straight Tip) - BNC style", "B. SC (Subscriber Connector / Standard Connector)", "C. FC (Ferrule Connector) - Screw style", "D. RJ-45 Modular Plug", "E. BNC Coaxial"],
            "ans": "B"
        },
        {
            "num": 23,
            "q": "Di Router MikroTik, fitur Firewall Filter yang digunakan untuk mengelompokkan beberapa alamat IP sumber atau tujuan ke dalam satu nama objek agar memudahkan pembuatan rule pemblokiran secara masal dinamakan...",
            "opts": ["A. Address List", "B. Connection State", "C. Layer7 Protocol", "D. Service Port", "E. Mangle Packet Mark"],
            "ans": "A"
        },
        {
            "num": 24,
            "q": "Pada frame Ethernet 802.1Q VLAN Tagging, informasi header VLAN ID ditambahkan di antara field MAC Address dan Type/Length. Berapakah panjang bit header VLAN ID (VID) standar IEEE 802.1Q tersebut?",
            "opts": ["A. 4 Bit (Maksimal 16 VLAN)", "B. 8 Bit (Maksimal 256 VLAN)", "C. 12 Bit (Maksimal 4096 VLAN ID: 0-4095)", "D. 16 Bit (Maksimal 65536 VLAN)", "E. 32 Bit (Maksimal 4 Juta VLAN)"],
            "ans": "C"
        },
        {
            "num": 25,
            "q": "Dalam prosedur Keselamatan dan Kesehatan Kerja Lingkungan Hidup (K3LH) saat melakukan instalasi dan pemotongan kabel Fiber Optik, tindakan penanganan potongan pecahan core kaca (glass fiber) yang paling benar adalah...",
            "opts": ["A. Ditiup menggunakan kompresor angin hingga bersih dari meja kerja", "B. Dibuang langsung ke tempat sampah umum tanpa pembungkus", "C. Diusap dengan tangan kosong lalu dibersihkan dengan air mengalir", "D. Dikumpulkan menggunakan isolasi/solasi perekat khusus lalu dibuang ke wadah penampung limbah tajam/tertutup (Fiber Disposal Container)", "E. Biarkan menempel di baju kerja hingga selesai proses splicing"],
            "ans": "D"
        }
    ];

    let currentQuestionIndex = 0;
    let studentData = {};
    let quizTimerInterval;
    let quizActive = false;
    const QUIZ_DURATION_SECONDS = 60 * 60;

    // Render Soal
    const container = document.getElementById('questionsContainer');
    questionsData.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = `question-card ${idx === 0 ? 'active' : ''}`;
        card.id = `qCard_${idx}`;
        
        let optionsHtml = '';
        q.opts.forEach((opt, optIdx) => {
            const optLetter = String.fromCharCode(65 + optIdx);
            optionsHtml += `
                <label class="option-label">
                    <input type="radio" name="q${q.num}" value="${optLetter}">
                    ${opt.replace(/^[A-E]\.\s*/, '')}
                </label>
            `;
        });

        card.innerHTML = `
            <div class="question-title">${q.num}. ${q.q}</div>
            ${optionsHtml}
        `;
        container.appendChild(card);
    });

    // Update Navigasi UI
    function updateQuizUI() {
        document.querySelectorAll('.question-card').forEach((card, idx) => {
            card.classList.toggle('active', idx === currentQuestionIndex);
        });

        const total = questionsData.length;
        document.getElementById('progressIndicator').innerText = `Soal ${currentQuestionIndex + 1} dari ${total}`;
        const pct = ((currentQuestionIndex + 1) / total) * 100;
        document.getElementById('progressBar').style.width = `${pct}%`;

        document.getElementById('btnPrev').disabled = (currentQuestionIndex === 0);

        if (currentQuestionIndex === total - 1) {
            document.getElementById('btnNext').style.display = 'none';
            document.getElementById('btnSubmit').style.display = 'flex';
        } else {
            document.getElementById('btnNext').style.display = 'flex';
            document.getElementById('btnSubmit').style.display = 'none';
        }
    }

    function changeQuestion(step) {
        currentQuestionIndex += step;
        updateQuizUI();
    }

    function startQuizTimer() {
        const timerElement = document.getElementById('quizTimer');
        const deadline = Date.now() + QUIZ_DURATION_SECONDS * 1000;

        function updateTimer() {
            const remainingSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
            const minutes = Math.floor(remainingSeconds / 60);
            const seconds = remainingSeconds % 60;
            timerElement.innerText = `Waktu tersisa: ${minutes}:${String(seconds).padStart(2, '0')}`;
            timerElement.classList.toggle('timer-warning', remainingSeconds <= 5 * 60);

            if (remainingSeconds === 0) {
                clearInterval(quizTimerInterval);
                document.getElementById('quizForm').requestSubmit();
            }
        }

        updateTimer();
        quizTimerInterval = setInterval(updateTimer, 1000);
    }

    function showQuizLockWarning(message) {
        document.getElementById('quizLockWarningMessage').innerText = message;
        document.getElementById('quizLockWarning').hidden = false;
    }

    function resetQuizForFocusLoss(message) {
        if (!quizActive) {
            return;
        }

        quizActive = false;
        clearInterval(quizTimerInterval);
        document.getElementById('quizForm').reset();
        document.getElementById('identityForm').reset();
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('resultView').style.display = 'none';
        document.getElementById('identityForm').style.display = 'block';
        document.getElementById('quizLockWarning').hidden = true;
        document.getElementById('quizResetNotice').innerText = message;
        document.getElementById('quizResetNotice').hidden = false;

        currentQuestionIndex = 0;
        studentData = {};
        const timerElement = document.getElementById('quizTimer');
        timerElement.innerText = 'Waktu tersisa: 60:00';
        timerElement.classList.remove('timer-warning');
        updateQuizUI();

        if (document.fullscreenElement) {
            document.exitFullscreen().catch(function(error) {
                console.error('Mode layar penuh tidak dapat ditutup:', error);
            });
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.getElementById('dismissQuizLockWarning').addEventListener('click', function() {
        document.getElementById('quizLockWarning').hidden = true;
    });

    document.addEventListener('visibilitychange', function() {
        if (quizActive && document.hidden) {
            resetQuizForFocusLoss('Kuis direset karena Anda berpindah tab. Silakan isi identitas untuk memulai kembali.');
        }
    });

    document.addEventListener('fullscreenchange', function() {
        if (quizActive && !document.fullscreenElement) {
            resetQuizForFocusLoss('Kuis direset karena mode layar penuh ditutup. Silakan isi identitas untuk memulai kembali.');
        }
    });

    // Form Identitas Submit
    document.getElementById('identityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('quizResetNotice').hidden = true;

        quizActive = true;
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(function(error) {
                console.error('Fullscreen tidak dapat diaktifkan:', error);
                showQuizLockWarning('Mode layar penuh tidak dapat diaktifkan. Browser atau perangkat mungkin tidak mendukungnya.');
            });
        } else {
            showQuizLockWarning('Browser ini tidak mendukung mode layar penuh. Harap tetap fokus pada halaman kuis.');
        }
        
        studentData = {
            nama: document.getElementById('studentName').value,
            kelas: document.getElementById('studentClass').value
        };

        document.getElementById('identityForm').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';
        updateQuizUI();
        startQuizTimer();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Submit Kuis & Tampilkan Hasil Ringkas
    document.getElementById('quizForm').addEventListener('submit', function(e) {
        e.preventDefault();
        quizActive = false;
        clearInterval(quizTimerInterval);
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(function(error) {
                console.error('Mode layar penuh tidak dapat ditutup:', error);
            });
        }

        let score = 0;
        let correctCount = 0;
        const answers = {};

        questionsData.forEach(q => {
            const selected = document.querySelector(`input[name="q${q.num}"]:checked`);
            const userAnsLetter = selected ? selected.value : '-';
            answers[`Soal_${q.num}`] = userAnsLetter;

            const isCorrect = (userAnsLetter === q.ans);
            if (isCorrect) {
                score += 100 / questionsData.length;
                correctCount++;
            }
        });

        // Set Nilai & Rasio Benar/Total
        document.getElementById('finalScoreVal').innerText = score;
        document.getElementById('correctRatioVal').innerText = `${correctCount} / ${questionsData.length}`;

        // Tampilkan Tampilan Hasil Akhir
        document.getElementById('quizSection').style.display = 'none';
        document.getElementById('resultView').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Kirim Ke Google Sheets
        const payload = {
            nama: studentData.nama,
            kelas: studentData.kelas,
            nilai: score,
            benar: correctCount,
            totalSoal: questionsData.length,
            ...answers
        };

        document.getElementById('statusMessage').innerText = 'Mengirim hasil kuis ke Google Spreadsheet...';
        sendQuizResultToGoogleSheets(payload)
        .then(() => {
            document.getElementById('statusMessage').innerText = 'Permintaan pengiriman selesai. Periksa Google Spreadsheet untuk memastikan hasil tersimpan.';
        })
        .catch(err => {
            document.getElementById('statusMessage').innerText = "Gagal terhubung ke Google Sheets: " + err;
            document.getElementById('statusMessage').style.color = "#b91c1c";
        });
    });
