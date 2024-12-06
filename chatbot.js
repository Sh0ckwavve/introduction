// Predefined questions and responses
const predefinedQuestions = [
    {
        text: 'Tell me about Advance Career Technologies',
        value: ['about_act', 'about act', 'advance career', 'act'],
        response: 'Advance Career Technologies offers professional development in fields like finance, business analytics, engineering, and more.'
    },
    {
        text: 'What courses do you offer?',
        value: ['courses', 'course', 'act'],
        response: 'We offer self-paced courses in accounting, banking, business analytics, and core engineering.'
    },
    {
        text: 'Tell me about Midbrain Activation',
        value: ['midbrain'],
        response: 'Midbrain activation is a technique that aims to enhance cognitive abilities and memory, especially in children.'
    },
    {
        text: 'What is DMIT?',
        value: ['dmit'],
        response: 'DMIT, or Dermatoglyphics Multiple Intelligence Test, helps understand brain functions and learning patterns.'
    },
    {
        text: 'Name of the directors?',
        value: ['directors', 'director'],
        response: 'Directors of Advance Career Technologies Private Limited are Rubina Gafur Dharwar, Maimuna Shaikh, Shajhan Aisha, and Ummesalma Shahnawaz Shaikh.'
    },
    {
        text: 'How can I contact you?',
        value: ['contact', 'email', 'phone', 'number', 'mobile'],
        response: 'You can reach us through our contact page on the website or email us at contact@advancetechnologies.com.'
    },
    {
        text: 'What topics are covered in accounting courses?',
        value: ['accounting', 'account', 'accounts'],
        response: 'Our accounting courses cover topics like ratio analysis and U.S. individual tax code basics.'
    },
    {
        text: 'Do you offer courses in business analytics?',
        value: ['business_analytics'],
        response: 'Yes, we offer courses in data analysis, exploratory factor analysis, and business analysis using Excel.'
    },
    {
        text: 'What certifications are available in banking?',
        value: ['banking_cert'],
        response: 'We offer foundational certification in BFSI and specialized certification with E&ICT NIT Patna.'
    },
    {
        text: 'Are there any courses in core engineering?',
        value: ['engineering'],
        response: 'In core engineering, we offer courses like Arduino development, drone technology, and home automation with Arduino.'
    }
];

// Elements
const chatbotButton = document.getElementById('chatbot-button');
const chatbox = document.getElementById('chatbox');
const predefinedQuestionsContainer = document.getElementById('predefined-questions');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatboxContent = document.getElementById('chatbox-content');

// Toggle chatbox visibility
chatbotButton.addEventListener('click', () => {
    chatbox.style.display = chatbox.style.display === 'none' || chatbox.style.display === '' ? 'block' : 'none';
});

// Populate predefined questions
predefinedQuestions.forEach(question => {
    const button = document.createElement('button');
    button.textContent = question.text;
    button.style.display = 'block';
    button.style.marginBottom = '5px';
    button.style.padding = '5px 10px';
    button.style.cursor = 'pointer';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.backgroundColor = '#0078D7';
    button.style.color = 'white';

    button.addEventListener('click', () => {
        addMessage('question', question.text);
        addMessage('answer', question.response);
    });

    predefinedQuestionsContainer.appendChild(button);
});

// Add message to chatbox
function addMessage(type, text) {
    const message = document.createElement('div');
    message.className = `chat-message ${type}`;
    message.textContent = text;
    chatboxContent.appendChild(message);
    chatboxContent.scrollTop = chatboxContent.scrollHeight;
}

// Process user input
sendButton.addEventListener('click', () => {
    const inputText = userInput.value.trim().toLowerCase();
    if (inputText) {
        addMessage('question', userInput.value);

        // Check if input matches any predefined keywords
        const response = predefinedQuestions.find(q =>
            q.value.some(keyword => inputText.includes(keyword))
        );
        if (response) {
            addMessage('answer', response.response);
        } else {
            addMessage('answer', "I'm sorry, I don't have information on that. Please contact us for further assistance.");
        }

        userInput.value = '';
    }
});
