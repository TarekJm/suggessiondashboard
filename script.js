document.addEventListener("DOMContentLoaded", function() {
    const suggestionsData = [
        {
            department: "الموارد البشرية",
            suggestions: [
                {
                    employeeName: "راضية حمدي",
                    date: "2024-08-01",
                    image: "https://via.placeholder.com/50",
                    text: "يجب علينا تحسين عملية التوظيف.",
                    messagesCount: 5
                },
                {
                    employeeName: "أحلام القمودي",
                    date: "2024-08-05",
                    image: "https://via.placeholder.com/50",
                    text: "دعونا نقيم أنشطة بناء فرق شهرية.",
                    messagesCount: 2
                }
            ]
        },
        {
            department: "تكنولوجيا المعلومات",
            suggestions: [
                {
                    employeeName: "ليلى بشر",
                    date: "2024-08-03",
                    image: "https://via.placeholder.com/50",
                    text: "نحتاج إلى ترقية خوادمنا.",
                    messagesCount: 3
                },
                {
                    employeeName: "إيمان حجاجي",
                    date: "2024-08-07",
                    image: "https://via.placeholder.com/50",
                    text: "تفعيل التحقق بخطوتين لجميع المستخدمين.",
                    messagesCount: 1
                }
            ]
        },
        {
            department: "التسويق",
            suggestions: [
                {
                    employeeName: "فاطمة بوشنيبة",
                    date: "2024-08-09",
                    image: "https://via.placeholder.com/50",
                    text: "يجب تعزيز وجودنا على وسائل التواصل الاجتماعي.",
                    messagesCount: 7
                },
                {
                    employeeName: "راضية بن ناجمة",
                    date: "2024-08-11",
                    image: "https://via.placeholder.com/50",
                    text: "اقترح تقديم عروض ترويجية جديدة للمنتجات.",
                    messagesCount: 4
                }
            ]
        },
        {
            department: "المبيعات",
            suggestions: [
                {
                    employeeName: "راضية حمدي",
                    date: "2024-08-10",
                    image: "https://via.placeholder.com/50",
                    text: "يجب التركيز على العملاء الجدد.",
                    messagesCount: 6
                },
                {
                    employeeName: "أحلام القمودي",
                    date: "2024-08-12",
                    image: "https://via.placeholder.com/50",
                    text: "زيادة الحوافز لفريق المبيعات.",
                    messagesCount: 8
                }
            ]
        },
        {
            department: "المحاسبة",
            suggestions: [
                {
                    employeeName: "ليلى بشر",
                    date: "2024-08-08",
                    image: "https://via.placeholder.com/50",
                    text: "نحتاج إلى تدقيق داخلي للميزانية.",
                    messagesCount: 0
                },
                {
                    employeeName: "فاطمة بوشنيبة",
                    date: "2024-08-12",
                    image: "https://via.placeholder.com/50",
                    text: "اقتراح تحسين عملية إصدار الفواتير.",
                    messagesCount: 5
                }
            ]
        }
    ];

    function calculateDaysAgo(suggestionDate) {
        const currentDate = new Date();
        const suggestionDateObj = new Date(suggestionDate);
        const timeDiff = currentDate - suggestionDateObj;
        const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        return daysAgo;
    }

    function renderSuggestions(data) {
        const departmentsContainer = document.getElementById("departments");
        departmentsContainer.innerHTML = "";

        data.forEach(departmentData => {
            const departmentDiv = document.createElement("div");
            departmentDiv.className = "department";

            const departmentTitle = document.createElement("h2");
            departmentTitle.textContent = departmentData.department;
            departmentDiv.appendChild(departmentTitle);

            departmentData.suggestions.forEach(suggestion => {
                const suggestionDiv = document.createElement("div");
                suggestionDiv.className = "suggestion";

                const img = document.createElement("img");
                img.src = suggestion.image;
                suggestionDiv.appendChild(img);

                const infoDiv = document.createElement("div");
                infoDiv.className = "info";

                const employeeName = document.createElement("p");
                employeeName.textContent = suggestion.employeeName;
                infoDiv.appendChild(employeeName);

                const suggestionText = document.createElement("p");
                suggestionText.textContent = suggestion.text;
                infoDiv.appendChild(suggestionText);

                const dateDiv = document.createElement("p");
                dateDiv.className = "date";

                const dateText = document.createTextNode(suggestion.date);
                dateDiv.appendChild(dateText);

                // Create Font Awesome icon for messages
                const messageIcon = document.createElement("i");
                messageIcon.className = "fas fa-comment"; // Font Awesome class for the comment icon
                messageIcon.style.marginLeft = "5px"; // Add some margin for spacing
                dateDiv.appendChild(messageIcon);

                const tag = document.createElement("span");
                tag.className = "tag";
                tag.textContent = suggestion.messagesCount;
                dateDiv.appendChild(tag);

                infoDiv.appendChild(dateDiv);

                const daysAgo = calculateDaysAgo(suggestion.date);
                const daysAgoText = document.createElement("p");
                daysAgoText.className = "days-ago";
                daysAgoText.textContent = `منذ ${daysAgo} أيام`;
                infoDiv.appendChild(daysAgoText);

                suggestionDiv.appendChild(infoDiv);
                departmentDiv.appendChild(suggestionDiv);
            });

            departmentsContainer.appendChild(departmentDiv);
        });
    }

    renderSuggestions(suggestionsData);
});
