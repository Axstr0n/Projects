const apiKey = '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'

const maxImages = 4

var selectedImageNumber = null;

function getRandomNumber(min, max){
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number
}

function disableGenerateButton(){
    document.getElementById('generate-button').disabled = true
    document.getElementById('model-select').disabled = true
}

function enableGenerateButton(){
    document.getElementById('generate-button').disabled = false
    document.getElementById('model-select').disabled = false
}

function clearImageGrid(){
    const imageGrid = document.getElementById('image-grid');
    imageGrid.innerHTML = ''
}

async function generateImages(input){
    disableGenerateButton()
    clearImageGrid()

    const loading = document.getElementById('loading')
    loading.style.display = 'block'

    const imageUrls = []

    for(let i=0; i < maxImages; i++){
        const randomNumber = getRandomNumber(1, 100000);
        const prompt = `${input} ${randomNumber}`;

        var MODEL_ID = document.getElementById('model-select').value;
        
        const response = await fetch(
            `https://api-inference.huggingface.co/models/${MODEL_ID}`,
            {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if(!response.ok){
            console.log("Failed to generate image!")
            //alert("Failed to generate image!");
        }

        const blob = await response.blob();
        const imgUrl = URL.createObjectURL(blob);
        imageUrls.push(imgUrl)

        const img = document.createElement("img")
        img.src = imgUrl;
        img.alt = `art-${i+1}`;
        img.onclick = () => downloadImage(imgUrl, i);

        
        document.getElementById("image-grid").appendChild(img);
        
    }

    loading.style.display = 'none';
    enableGenerateButton();

    selectedImageNumber = null;

}

document.getElementById('generate-button').addEventListener('click', () =>{
    const input = document.getElementById("user-prompt").value;
    generateImages(input);
});

function downloadImage(imgUrl, imageNumber){
    const link = document.createElement("a");
    link.href = imgUrl;

    link.download = `image-${imageNumber + 1}.jpg`;
    link.click();
}

