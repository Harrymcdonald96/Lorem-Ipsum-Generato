document.getElementById('generateBtn').addEventListener('click', generateText);
document.getElementById('copyBtn').addEventListener('click', copyText);

function generateText() {
  const paragraphs = parseInt(document.getElementById('numParagraphs').value);
  const textOutput = document.getElementById('textOutput');
  const baseText = [
    "This opera's as lousy as it is brilliant! Your lyrics lack subtlety.",
    "You can't just have your characters announce how they feel. That makes me feel angry!",
    "Anyhoo, your net-suits will allow you to experience Fry's worm-infested bowels as if you were actually wriggling through them.",
    "I just told you! You've killed me! Fry! Quit doing the right thing, you jerk!",
    "Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how to say that letter that's shaped like a man wearing a hat."
  ];
  textOutput.value = '';
  for (let i = 0; i < paragraphs; i++) {
    textOutput.value += baseText[Math.floor(Math.random() * baseText.length)] + '\n\n';
  }
}

function copyText() {
  const textOutput = document.getElementById('textOutput');
  textOutput.select(); // Select the textarea content
  textOutput.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand('copy'); // Copy the text
  alert('Text copied to clipboard!'); // Alert the user
}
