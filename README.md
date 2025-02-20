# Rock Paper Scissors Game 🎮  

A simple **Rock, Paper, Scissors** game built with JavaScript! Play against the computer and test your luck.  

## 🚀 Features  

- Interactive UI  
- Randomized computer choices  
- Score tracking  
- Responsive design  

## 🛠️ Technologies Used  

- HTML  
- CSS  
- JavaScript  

## 📦 Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/Rock_Paper_Scissor_Game.git
2. Navigate to the project folder:
   ```bash
   cd Rock_Paper_Scissor_Game
3. Open index.html in your browser.

   ## 🌟 Future Improvements  

### 🔊 Add Sound Effects  
You can add sound effects when the player makes a choice or when the result is displayed.  

```javascript
const winSound = new Audio('win.mp3');  
const loseSound = new Audio('lose.mp3');  
const drawSound = new Audio('draw.mp3');  

function playSound(result) {  
    if (result === 'win') winSound.play();  
    else if (result === 'lose') loseSound.play();  
    else drawSound.play();  
}
