let ctr=0;
function No(){
    ctr++;
    if(ctr==1){
        document.getElementById('nobutton').textContent="Are you sure?";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
        document.getElementById('nobutton').style.left = `${ctr * 100}px`;
    }
    if(ctr==2){
        document.getElementById('nobutton').textContent="Think again";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
        document.getElementById('nobutton').style.left = `${ctr * 100}px`;
    }
    if(ctr==3){
        document.getElementById('nobutton').textContent="PLEASEEEEEEEE";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
    }
    if(ctr==4){
        document.getElementById('nobutton').textContent="I'll cry lwk";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
    }
    if(ctr==5){
        document.getElementById('nobutton').textContent="Bruh,why not?";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
    }
    if(ctr==6){
        document.getElementById('nobutton').textContent="Please say YES";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
    }
    if(ctr==7){
        document.getElementById('nobutton').textContent="PLEASEEEEE";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
    }
    if(ctr==8){
        document.getElementById('nobutton').textContent="Breaking my heart yk";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
    }
    if(ctr==9){
        document.getElementById('nobutton').textContent="Please say YES";
        document.getElementById('yesbutton').style.transform = `scale(${ctr+ctr/10})`;
    }
    // if(ctr==10){
    //     const nobtn=document.getElementById('nobutton');
    //     nobtn.classList.add("burst");
    //     setTimeout(() => {
    //         nobtn.remove();
    //     }, 400);
}

function yes(){
    //document.getElementById('ques').textContent="YAYAYAYAYAYAYEYEYEY!!!!";
    document.getElementById('ques').remove();
    document.getElementById('yesbutton').remove();
    document.getElementById('nobutton').remove();
    const img = document.createElement('img');
    img.src='boquet.png'
    document.getElementById('boq').appendChild(img);
    document.getElementById('yay').textContent="YAYAYAYAYAYYYY!!!! Lessgoooo❤️";
}