const questionsData = {
    tracNghiem: [
        {
            id: 1,
            question: "Chọn mệnh đề đúng. Mô men lực là",
            options: [
                "đại lượng đặc trưng cho tác dụng làm quay của lực.",
                "đại lượng cho đặc trưng độ biến đổi nhanh hay chậm của vận tốc",
                "đại lượng đặc trưng cho độ nhanh hay chậm của chuyển động.",
                "đại lượng cho đặc trưng độ nhanh hay chậm của lực."
            ],
            correct: 0
        },
        {
            id: 2,
            question: "Đơn vị momen của lực trong hệ SI là",
            options: ["N.m", "N.m²", "N.m/s", "N/m"],
            correct: 0
        },
        {
            id: 3,
            question: "Một lực không đổi có độ lớn F, tác dụng lên một vật rắn làm nó có thể quay quanh trục. Cánh tay đòn của lực là d. Mô men của lực là M tính theo công thức đúng là",
            options: ["M = F.d", "M = F/d", "M = F.d²", "M = F + d"],
            correct: 0
        },
        {
            id: 4,
            question: "Dụng cụ nào sau đây không cần dùng trong bài thực hành Tổng hợp lực hai đồng quy?",
            options: ["Lực kế", "Dây chỉ bền", "Thước đo góc", "Đồng hồ đo thời gian"],
            correct: 3
        },
        {
            id: 5,
            question: "Hai lực F₁ và F₂ tác dụng đồng thời vào vật rắn. Khi hai lực này cùng chiều, thì hợp lực của chúng là F tính theo công thức đúng là",
            options: ["F = F₁ + F₂", "F = F₁ - F₂", "F = √(F₁² + F₂²)", "F = F₁ × F₂"],
            correct: 0
        },
        {
            id: 6,
            question: "Bộ dụng cụ và phương án bố trí thí nghiệm như hình dưới được sử dụng trong thí nghiệm nào sau đây?",
            image: "assets/hinh-trac-nghiem-cau-6.png",
            options: [
                "Thí nghiệm tổng hợp hai lực đồng quy",
                "Thí nghiệm khảo sát lực đàn hồi của lò xo lực kế",
                "Thí nghiệm minh họa định luật 2 Newton",
                "Thí nghiệm tổng hợp hai lực song song"
            ],
            correct: 0
        },
        {
            id: 7,
            question: "Dưới tác dụng vec-tơ lực F hợp với phương chuyển động một góc α làm vật di chuyển quãng đường s. Biểu thức tính công của lực là",
            options: ["A = F.s.cos α", "A = F.cos α", "A = s.cos α", "A = F.s.sin α"],
            correct: 0
        },
        {
            id: 8,
            question: "Lực F không đổi tác dụng lên một vật làm vật chuyển dời đoạn s theo hướng hợp với hướng của lực một góc α, biểu thức tính công của lực là:",
            options: ["A = F.s.cos α", "A = F.s", "A = F.s.sin α", "A = F.s + cos α"],
            correct: 0
        },
        {
            id: 9,
            question: "Đơn vị nào sau đây là đơn vị của công?",
            options: ["kW", "N/m", "J", "W"],
            correct: 2
        },
        {
            id: 10,
            question: "Đơn vị công của lực là",
            options: ["J (Jun)", "W (oát)", "N (Niuton)", "m (mét)"],
            correct: 0
        },
        {
            id: 11,
            question: "Phát biểu nào sau đây là sai khi nói về năng lượng?",
            options: [
                "Năng lượng là một đại lượng vô hướng",
                "Năng lượng có thể chuyển hóa từ dạng này sang dạng khác",
                "Năng lượng luôn là một đại lượng bảo toàn",
                "Trong hệ SI, đơn vị của năng lượng là calories (calo)"
            ],
            correct: 3
        },
        {
            id: 12,
            question: "Đại lượng đặc trưng cho khả năng thực hiện công nhanh hay chậm trong một đơn vị thời gian gọi là",
            options: ["công suất", "năng lượng", "công cơ học", "động năng"],
            correct: 0
        },
        {
            id: 13,
            question: "Đại lượng đặc trưng cho khả năng thực hiện công nhanh hay chậm trong một đơn vị thời gian gọi là",
            options: ["công suất", "năng lượng", "công cơ học", "động năng"],
            correct: 0
        },
        {
            id: 14,
            question: "Đơn vị của công suất là",
            options: ["W", "J.m", "kg.m/s", "J.s"],
            correct: 0
        },
        {
            id: 15,
            question: "Công suất được xác định bằng:",
            options: [
                "tích của công và thời gian thực hiện công",
                "công thực hiện trong một đơn vị thời gian",
                "công thực hiện được trên một đơn vị chiều dài",
                "giá trị công thực hiện được"
            ],
            correct: 1
        },
        {
            id: 16,
            question: "Công suất của lực F làm vật di chuyển với vận tốc v theo hướng của F là",
            options: ["P = Fv²", "P = Fv", "P = Fvt", "P = Ft"],
            correct: 1
        },
        {
            id: 17,
            question: "Một lực không đổi là F, tác dụng lên vật chuyển động với tốc độ v cùng chiều lực. Công suất tức thời là",
            options: ["P = F.v", "P = F/v", "P = F + v", "P = F - v"],
            correct: 0
        },
        {
            id: 18,
            question: "Một máy thực hiện công A trong thời gian t. Công suất trung bình của máy là P tính theo công thức",
            options: ["P = A/t", "P = A.t", "P = A + t", "P = t/A"],
            correct: 0
        },
        {
            id: 19,
            question: "Một vật trọng lượng 50 N được kéo thẳng đều từ mặt đất lên độ cao 10 m trong khoảng thời gian 1 phút 40 giây. Xác định công suất của lực kéo.",
            options: ["1 W", "0,5 W", "5 W", "10 W"],
            correct: 2
        },
        {
            id: 20,
            question: "Cơ năng của một vật là",
            options: [
                "tổng động lượng và thế năng",
                "tổng động năng và nội năng",
                "tổng động năng và động lượng",
                "tổng động năng và thế năng của nó"
            ],
            correct: 3
        },
        {
            id: 21,
            question: "Khi một vật chuyển động trong trọng trường thì cơ năng của vật được xác định theo công thức:",
            options: [
                "W = (1/2)mv² + mgh",
                "W = (1/2)mv + mgh",
                "W = (1/2)mv² + (1/2)mgh",
                "W = (1/2)mv + (1/2)mgh"
            ],
            correct: 0
        },
        {
            id: 22,
            question: "Khi nói về định luật bảo toàn cơ năng, phát biểu đúng là",
            options: [
                "Chỉ có trọng lực tác dụng thì cơ năng của vật luôn không thay đổi",
                "Cơ năng một người nhảy dù bảo toàn",
                "Khi một vật được thả rơi tự do, cơ năng không bảo toàn",
                "Khi cơ năng bảo toàn, nếu động năng tăng thì thế năng trọng trường cũng tăng"
            ],
            correct: 0
        },
        {
            id: 23,
            question: "Lúc đầu vật có động năng là W₁. Do lực thực hiện công A nên lúc sau vật đó có động năng là W₂. Công thức liên hệ độ biến thiên động năng và công là",
            options: ["A = W₂ - W₁", "A = W₁ - W₂", "A = W₁ + W₂", "A = W₁.W₂"],
            correct: 0
        },
        {
            id: 24,
            question: "Một chất điểm có khối lượng m chuyển động với vận tốc v thì động năng của nó bằng",
            options: ["2mv²", "mv²", "(1/2)mv²", "mv"],
            correct: 2
        },
        {
            id: 25,
            question: "Một vật có khối lượng m, ở nơi có độ cao h so với mốc thế năng và gia tốc rơi tự do là g thì vật có thế năng Wt tính theo công thức là",
            options: ["Wt = mgh", "Wt = mgh²", "Wt = m²gh", "Wt = (1/2)mgh"],
            correct: 0
        },
        {
            id: 26,
            question: "Thế năng trọng trường là đại lượng",
            options: [
                "vô hướng, có thể dương hoặc bằng không",
                "vô hướng, có thể âm, dương hoặc bằng không",
                "véc tơ cùng hướng với véc tơ trọng lực",
                "véc tơ có độ lớn luôn dương hoặc bằng không"
            ],
            correct: 1
        },
        {
            id: 27,
            question: "Khi con lắc đơn dao động đến vị trí cao nhất",
            options: [
                "động năng đạt giá trị cực đại",
                "cơ năng bằng không",
                "thế năng đạt giá trị cực đại",
                "thế năng bằng động năng"
            ],
            correct: 2
        },
        {
            id: 28,
            question: "Một chất điểm có khối lượng m chuyển động với vận tốc v thì động năng của nó bằng",
            options: ["mv", "2mv²", "mv²", "(1/2)mv²"],
            correct: 3
        },
        {
            id: 29,
            question: "Khi hạt mưa rơi, thế năng của nó chuyển hoá thành",
            options: ["nhiệt năng", "động năng", "hoá năng", "quang năng"],
            correct: 1
        },
        {
            id: 30,
            question: "Hiệu suất là tỉ số giữa",
            options: [
                "năng lượng hao phí và năng lượng có ích",
                "năng lượng có ích và năng lượng hao phí",
                "năng lượng có ích và năng lượng toàn phần",
                "năng lượng hao phí và năng lượng toàn phần"
            ],
            correct: 2
        }
    ],
    dungSai: [
        {
            id: 1,
            question: "Một lực có độ lớn F=10 N, tác dụng lên vật làm nó chuyển động thẳng đều và đi được quãng đường s = 2 m trong thời gian 4 giây. Biết lực F cùng chiều chuyển động",
            statements: [
                "Công của lực F tính theo công thức là A=F.s.",
                "Tính công của lực: A=F.s = 10.2=20 J.",
                "Góc giữa lực và chiều chuyển động bằng 0.",
                "Công của lực F tính theo công thức là A=F.s.sin(α) với α=0"
            ],
            correct: [true, true, true, false]
        },
        {
            id: 2,
            question: "Một máy bay có khối lượng m, đang bay với vận tốc v tại độ cao h so với mặt đất. lấy g = 10 m/s². Chọn mặt đất làm mốc tính độ cao",
            statements: [
                "Thế năng của máy bay là Wt=mgh.",
                "Động năng máy bay là Wđ=mv/2.",
                "Cơ năng máy bay luôn không đổi.",
                "Khi máy bay giảm tốc độ để hạ cánh, động năng giảm dần."
            ],
            correct: [true, false, false, true]
        },
        {
            id: 3,
            question: "Một vật có khối lượng m = 4 kg đang nằm yên trên mặt sàn nằm ngang. Kéo vật trượt bằng lực có độ lớn 30N và hợp với mặt sàn góc 60°. Hệ số ma sát giữa vật và mặt sàn là 0,4. Khi vật trượt được đoạn đường 0,5m. Lấy g = 10 m/s²",
            image: "assets/hinh-dung-sai-cau-3.png",
            statements: [
                "Công của lực kéo trong trường hợp này là công phát động",
                "Công là đại lượng vô hướng và luôn dương",
                "Công của lực ma sát bằng 20 J",
                "Công mà lực kéo thực hiện có giá trị bằng 7,5 N"
            ],
            correct: [true, false, false, false]
        },
        {
            id: 4,
            question: "Một động cơ có công suất tiêu thụ bằng 5 kW kéo một vật có trọng lượng 12 kN lên cao 30 m theo phương thẳng đứng trong thời gian 90 s với vận tốc không đổi.",
            statements: [
                "Công có ích là công để đưa vật lên cao.",
                "Công có ích để đưa vật lên cao có giá trị là 36000 J.",
                "Công toàn phần để đưa vật lên cao là 450000 J.",
                "Hiệu suất của động cơ là 80%."
            ],
            correct: [true, false, true, true]
        },
        {
            id: 5,
            question: "Một vật có khối lượng 0,5 kg được thả rơi từ độ cao 25 m. Bỏ qua mọi ma sát và lấy g = 10 m/s².",
            statements: [
                "Chuyển động của vật là chuyển động rơi tự do.",
                "Thế năng cực đại của vật bằng cơ năng và bằng 125 J.",
                "Khi chạm đất thì động năng của vật đạt cực đại.",
                "Độ cao của vật khi nó có động năng bằng thế năng cách mặt đất 115 m."
            ],
            correct: [true, true, true, false]
        },
        {
            id: 6,
            question: "Một em bé nặng 20 kg chơi cầu trượt từ trạng thái đứng yên ở đỉnh cầu trượt dài 4m, nghiêng góc 30° so với phương nằm ngang. Khi đến chân cầu trượt, tốc độ của em bé này là 2 m/s. Lấy g=10 m/s². Gốc thế năng chọn tại chân dốc.",
            image: "assets/hinh-dung-sai-cau-6.png",
            statements: [
                "Trong quá trình chuyển động của em bé cơ năng bảo toàn.",
                "Động năng của em bé tăng trong quá trình trượt.",
                "Cơ năng của em bé ở đỉnh cầu trượt là 400 J.",
                "Hiệu suất của quá trình biến đổi thế năng thành động năng ở chân dốc 10%."
            ],
            correct: [false, true, true, true]
        },
        {
            id: 7,
            question: "Trong các động tác nâng tạ từ vị trí (1) sang vị trí (2), từ vị trí (2) sang vị trí (3), từ vị trí (3) sang vị trí (4):",
            image: "assets/hinh-dung-sai-cau-7.png",
            statements: [
                "Từ vị trí (1) sang vị trí (2) đã có sự chuyển hoá từ động năng sang thế năng.",
                "Từ vị trí (2) sang vị trí (3) đã có sự chuyển hoá từ thế năng sang động năng.",
                "Động tác đứng lên từ vị trí (3) sang vị trí (4) là quá trình thực hiện công.",
                "Trong các động tác nâng tạ đã có sự truyền năng lượng từ năng lượng hóa học do con người nạp từ thức ăn sang đòn tạ và có sự chuyển hóa năng lượng từ hóa năng thành động năng của quả tạ thành thế năng quả tạ."
            ],
            correct: [false, false, true, true]
        },
        {
            id: 8,
            question: "Một cô gái đang chơi ván trượt, khi qua các vị trí (1), (2), (3), (4), (5) như hình vẽ. Bỏ qua mọi ma sát.",
            image: "assets/hinh-dung-sai-cau-8.png",
            statements: [
                "Động năng cực đại khi qua vị trí (3).",
                "Thế năng lớn nhất khi qua vị trí (1).",
                "Khi đi từ vị trí (1) sang vị trí (3) thì cơ năng tăng.",
                "Từ vị trí số (1), cô gái không thể tự trượt tới vị trí số (5)."
            ],
            correct: [false, true, true, true]
        }
    ],
    traLoiNgan: [
        {
            id: 1,
            question: "Một lực 20 N, có cánh tay đòn 5 m, tác dụng làm quay một vật. Tính mô men của lực đối với trục quay.",
            correct: "100",
            unit: "N.m"
        },
        {
            id: 2,
            question: "Một vô lăng xe ô tô có dạng hình tròn bán kính 20 cm. Người lái tác dụng lực 20 N lên vô lăng ở mỗi tay. Moment ngẫu lực trong trường hợp này là bao nhiêu?",
            correct: "8",
            unit: "N.m"
        },
        {
            id: 3,
            question: "Một người nhấc một vật có khối lượng 1 kg lên độ cao 6 m. Lấy g = 10 m/s². Công mà người đã thực hiện là bao nhiêu?",
            correct: "60",
            unit: "J"
        },
        {
            id: 4,
            question: "Một máy thực hiện một công A=100J trong thời gian 50 giây. Tính công suất trung bình của máy.",
            correct: "2",
            unit: "W"
        },
        {
            id: 5,
            question: "Một khối đá có khối lượng 100 kg đang ở trên sườn núi cách chân núi 5 mét. Lấy g=10 m/s². Tính thế năng trọng trường của khối đá. Chọn chân núi có thế năng bằng 0.",
            correct: "5000",
            unit: "J"
        },
        {
            id: 6,
            question: "Một bồ câu trắng có khối lượng 300 gam, bay với tốc độ 36 km/h thì có động năng bao nhiêu?",
            correct: "15",
            unit: "J"
        },
        {
            id: 7,
            question: "Một vật có khối lượng 1 kg rơi tự do từ độ cao h = 50 cm xuống đất, lấy g = 10 m/s². Động năng của vật ngay trước khi chạm đất là bao nhiêu?",
            correct: "5",
            unit: "J"
        },
        {
            id: 8,
            question: "Một vật khối lượng 200 gam được thả rơi tự do từ vị trí có thế năng bằng 40 J, bỏ qua mọi ma sát, lấy g = 10 m/s². Tính độ cao của vật khi thế năng bằng ba lần động năng.",
            correct: "15",
            unit: "m"
        },
        {
            id: 9,
            question: "Một vật khối lượng 2 kg rơi tự do từ độ cao 10 m so với mặt đất. Bỏ qua sức cản không khí, lấy g = 9,8 m/s². Sau khoảng thời gian 1,2 s trọng lực đã thực hiện một công bằng bao nhiêu? (Làm tròn đến hàng đơn vị)",
            correct: "138",
            unit: "J"
        },
        {
            id: 10,
            question: "Một vật khối lượng 200 gam được thả rơi tự do từ vị trí có thế năng bằng 40 J, bỏ qua mọi ma sát, lấy g = 10 m/s². Tính độ cao của vật khi thế năng bằng ba lần động năng.",
            correct: "15",
            unit: "m"
        },
        {
            id: 11,
            question: "Từ mặt đất một vật được ném lên thẳng đứng với vận tốc ban đầu v₀ = 15 m/s. Bỏ qua sức cản không khí, lấy g = 10 m/s². Ở độ cao nào thế năng bằng động năng? (Làm tròn đến hàng phần mười)",
            correct: "5,6",
            unit: "m"
        },
        {
            id: 12,
            question: "Một người nâng tấm ván AB có khối lượng 12 kg chiều dài l bằng lực F để ván nằm yên và hợp với mặt đường một góc 30°. Xác định độ lớn của lực F khi lực F hướng vuông góc với mặt đất. Cho g = 9,8 m/s².",
            image: "assets/hinh-tra-loi-ngan-cau-12.png",
            correct: "58,8",
            unit: "N"
        }
    ]
};
