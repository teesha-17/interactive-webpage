function changeContent() {
    const content = document.getElementById('content');
    const select = document.getElementById('content-select');
    const selectedValue = select.value;

    let newContent;

    switch (selectedValue) {
        case 'option1':
            newContent = `
                <h2>Introduction to HTML</h2>
                <p>HTML stands for HyperText Markup Language. It is the standard language for creating webpages and web applications.</p>
                <p>HTML describes the structure of a webpage using markup. HTML elements are represented by tags, and the most common tags include:</p>
                <ul>
                    <li><code>&lt;h1&gt; to &lt;h6&gt;</code>: Header tags, used to define headings.</li>
                    <li><code>&lt;p&gt;</code>: Paragraph tag, used to define paragraphs.</li>
                    <li><code>&lt;a&gt;</code>: Anchor tag, used to define hyperlinks.</li>
                    <li><code>&lt;div&gt;</code>: Division tag, used to define a section or a container.</li>
                </ul>
                <p>HTML is the backbone of any webpage. Understanding HTML is the first step to becoming a web developer.</p>
                <p>In HTML, there are diffrent types of sementic tags are available like header, footer, article, list, table, form etc.</p>
            `;
            break;
        case 'option2':
            newContent = `
                <h2>Introduction to CSS</h2>
                <p>CSS stands for Cascading Style Sheets. It is a style sheet language used to describe the presentation of a document written in HTML or XML.</p>
                <p>CSS describes how elements should be rendered on screen, on paper, or in other media. Some common properties include:</p>
                <ul>
                    <li><code>color</code>: Sets the color of the text.</li>
                    <li><code>background-color</code>: Sets the background color of an element.</li>
                    <li><code>font-size</code>: Sets the size of the font.</li>
                    <li><code>margin</code>: Sets the space outside of an element.</li>
                    <li><code>padding</code>: Sets the space inside an element.</li>
                </ul>
                <p>CSS is used to make webpages visually appealing and ensure that they look good on different devices and screen sizes.</p>
            `;
            break;
        case 'option3':
            newContent = `
                <h2>Introduction to JavaScript</h2>
                <p>JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.</p>
                <p>JavaScript is versatile and beginner-friendly. It allows you to implement complex features on web pages, such as:</p>
                <ul>
                    <li>Updating content dynamically.</li>
                    <li>Controlling multimedia.</li>
                    <li>Animating images and elements.</li>
                    <li>Handling user inputs and events.</li>
                </ul>
                <p>JavaScript can be used with HTML and CSS to create modern, responsive, and interactive web applications.</p>
            `;
            break;
        default:
            newContent = '<p>Select an option from the dropdown menu to see the content.</p>';
    }

    content.innerHTML = newContent;
}
