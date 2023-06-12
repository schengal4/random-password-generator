const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
function generateRandomCharacter() {
    return characters[Math.floor(Math.random()*characters.length)]
}
function generateOnePassword(passwordLength=15) {
    password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += generateRandomCharacter()
    }
    return password
}
function generatePasswords(passwordLength=15) {
    passwords = [generateOnePassword(passwordLength), generateOnePassword(passwordLength)]
    document.getElementById("word-1").textContent = passwords[0]
    document.getElementById("word-2").textContent = passwords[1]
    return passwords
}

