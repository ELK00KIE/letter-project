const message =  Hi, I hope you have been doing well and taking care of yourself. I’ve taken this to to really reflect, think, and sit with everything. I understand fully what you needed, not just love, but safety, stability, leadership, presence, direction, and hold you through life the way I was meant to, emotionally, mentally, physically, financially. I know I wasn’t fully there yet, and I know that I hurt you in ways that I would never wanted. But these weeks have changed me. Not because I lost you, but because I finally faced myself. You once said that love was not the problem between us, I still believe that. I don’t want to change or rewrite the past, or go back to how things were and repeat cycles/dynamics. I just want to say that, if there is space to start again. Slow, Soft, New. I’d love to see where we can go from here. I’m always wishing you peace and happiness. ;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

