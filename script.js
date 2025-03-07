function startGame() {
    const questions = [
        {
            question: "Trong tương lai, em muốn mình cùng nhau làm gì nhất?",
            options: ["Đi du lịch khắp thế giới 🌍", "Xây ngôi nhà nhỏ ấm áp 🏡", "Chỉ cần ở bên anh là đủ ❤️"],
            answer: 2
        },
        {
            question: "Điều gì khiến em cảm thấy hạnh phúc nhất?",
            options: ["Những món quà bất ngờ 🎁", "Những lời yêu thương ngọt ngào 💕", "Sự đồng hành và thấu hiểu của anh 🌷"],
            answer: 2
        }
    ];

    let score = 0;
    questions.forEach(q => {
        const userAnswer = prompt(`${q.question}\n${q.options.join("\n")}`);
        if (q.options.indexOf(userAnswer) === q.answer) score++;
    });

    if (score === questions.length) {
        alert("Em là tình yêu lớn nhất đời anh! Chúng mình sẽ có một tương lai thật hạnh phúc 💕");
    } else {
        alert("Dù câu trả lời thế nào, anh vẫn yêu em rất nhiều! 💖");
    }
}
