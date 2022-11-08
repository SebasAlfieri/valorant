    let video = document.querySelector('#videocyp');
    let i1 = document.querySelector('#i1');
    let i2 = document.querySelector('#i2');
    let i3 = document.querySelector('#i3');
    let i4 = document.querySelector('#i4');

i1.addEventListener('click', () => {
    video.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4';
    document.getElementById("hdescripcion1").innerHTML = "EQUIPA un cable trampa. DISPARA para colocar un cable trampa destructible y camuflado en la ubicación seleccionada que creará una línea entre ese lugar y la pared opuesta. Los jugadores enemigos que activen el cable trampa quedarán atados, revelados y aturdidos tras un momento si no destruyen el dispositivo a tiempo. Puedes recogerlo y VOLVER A COLOCARLO.";
    document.getElementById("i1").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("i2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i4").style.backgroundColor = "rgb(46, 38, 38)";
})
i2.addEventListener('click', () => {
    video.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4';
    document.getElementById("hdescripcion1").innerHTML = "Lanza AL INSTANTE una ciberjaula frente a Cypher. Actívala para crear una zona que bloquea la visión y ralentiza a los enemigos que la atraviesan.";
    document.getElementById("i1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i2").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("i3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i4").style.backgroundColor = "rgb(46, 38, 38)";
})
i3.addEventListener('click', () => {
    video.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4';
    document.getElementById("hdescripcion1").innerHTML = "EQUIPA una cámara espía. DISPARA para colocarla en la ubicación seleccionada. VUELVE A USAR esta habilidad para tomar el control de la vista de la cámara. Mientras la controlas, DISPARA para lanzar un dardo marcador que revelará la ubicación de cualquier jugador al que impacte.";
    document.getElementById("i1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i3").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("i4").style.backgroundColor = "rgb(46, 38, 38)";
})
i4.addEventListener('click', () => {
    video.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4';
    document.getElementById("hdescripcion1").innerHTML = "Apunta hacia un jugador enemigo muerto y úsalo DE INMEDIATO para revelar la ubicación de todos los jugadores enemigos con vida.";
    document.getElementById("i1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("i4").style.backgroundColor = "rgb(234,75,94)";
})

let video2 = document.querySelector('#videosage');
let s1 = document.querySelector('#s1');
let s2 = document.querySelector('#s2');
let s3 = document.querySelector('#s3');
let s4 = document.querySelector('#s4');
s1.addEventListener('click', () => {
    video2.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4';
    document.getElementById("hdescripcion2").innerHTML = "EQUIPA un orbe de ralentización y DISPARA para lanzarlo. Este detonará al caer al suelo y creará un campo que permanecerá en la zona y ralentizará a los jugadores que estén dentro de él.";
    document.getElementById("s1").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("s2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s4").style.backgroundColor = "rgb(46, 38, 38)";
})
s2.addEventListener('click', () => {
    video2.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4';
    document.getElementById("hdescripcion2").innerHTML = "EQUIPA un orbe curativo y DISPARA tras apuntar a un aliado herido para curarlo con el tiempo. Usa el DISPARO SECUNDARIO cuando Sage esté herida para curarla con el tiempo.";
    document.getElementById("s1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s2").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("s3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s4").style.backgroundColor = "rgb(46, 38, 38)";
})
s3.addEventListener('click', () => {
    video2.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4';
    document.getElementById("hdescripcion2").innerHTML = "EQUIPA un orbe de barrera. DISPARA para colocar una pared sólida. Usa el DISPARO SECUNDARIO para rotarla antes de crearla.";
    document.getElementById("s1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s3").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("s4").style.backgroundColor = "rgb(46, 38, 38)";
})
s4.addEventListener('click', () => {
    video2.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4';
    document.getElementById("hdescripcion2").innerHTML = "EQUIPA una habilidad de resurrección y DISPARA mientras apuntas hacia un aliado muerto para comenzar a resucitarlo. Tras un breve periodo de canalización, el aliado revivirá con toda su vida.";
    document.getElementById("s1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("s4").style.backgroundColor = "rgb(234,75,94)";
})

let video3 = document.querySelector('#videokj');
let kj1 = document.querySelector('#kj1');
let kj2 = document.querySelector('#kj2');
let kj3 = document.querySelector('#kj3');
let kj4 = document.querySelector('#kj4');
kj1.addEventListener('click', () => {
    video3.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4';
    document.getElementById("hdescripcion3").innerHTML = "EQUIPA un Alarmabot encubierto. DISPARA para desplegar un bot que caza a los enemigos que entren en su alcance. Después de alcanzar a su objetivo, el bot explota, lo que inflige daño y aplica Vulnerable. MANTÉN PRESIONADO EQUIPAR para recuperar un bot desplegado.";
    document.getElementById("kj1").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("kj2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj4").style.backgroundColor = "rgb(46, 38, 38)";
})
kj2.addEventListener('click', () => {
    video3.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4';
    document.getElementById("hdescripcion3").innerHTML = "EQUIPA una Torreta. DISPARA para desplegar una torreta que les dispara a los enemigos cercanos en un cono de 180 grados. MANTÉN PRESIONADO EQUIPAR para recuperar una torreta desplegada.";
    document.getElementById("kj1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj2").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("kj3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj4").style.backgroundColor = "rgb(46, 38, 38)";
})
kj3.addEventListener('click', () => {
    video3.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4';
    document.getElementById("hdescripcion3").innerHTML = "EQUIPA una granada de Nanoplaga. DISPARA para lanzar la granada. La Nanoplaga queda encubierta al aterrizar. ACTIVA Nanoplaga para desplegar un mortal enjambre de nanobots.";
    document.getElementById("kj1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj3").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("kj4").style.backgroundColor = "rgb(46, 38, 38)";
})
kj4.addEventListener('click', () => {
    video3.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4';
    document.getElementById("hdescripcion3").innerHTML = "EQUIPA el Dispositivo Inmovilizador. DISPARA para desplegar el dispositivo. Tras cargar, el dispositivo detiene a todos los enemigos dentro de su radio. Los enemigos pueden destruir el dispositivo.";
    document.getElementById("kj1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("kj4").style.backgroundColor = "rgb(234,75,94)";
})

let video4 = document.querySelector('#videochamber');
let ch1 = document.querySelector('#ch1');
let ch2 = document.querySelector('#ch2');
let ch3 = document.querySelector('#ch3');
let ch4 = document.querySelector('#ch4');
ch1.addEventListener('click', () => {
    video4.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4';
    document.getElementById("hdescripcion4").innerHTML = "ACTÍVALA para equipar una pistola pesada. Presiona DISPARO SECUNDARIO con la pistola equipada para usar la mira.";
    document.getElementById("ch1").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("ch2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch4").style.backgroundColor = "rgb(46, 38, 38)";
})
ch2.addEventListener('click', () => {
    video4.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1c12ab8f1c119bc/618d9fd2fb61e4021ad339f0/VAL_broll_EP03-3_Chamber_E.mp4';
    document.getElementById("hdescripcion4").innerHTML = "COLOCA dos teletransportadores. Mientras estés en el suelo y dentro de su zona de alcance, podrás REACTIVAR la habilidad para transportarte rápidamente al otro teletransportador. Puedes recogerlos para VOLVER A COLOCARLOS en otro lugar.";
    document.getElementById("ch1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch2").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("ch3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch4").style.backgroundColor = "rgb(46, 38, 38)";
})
ch3.addEventListener('click', () => {
    video4.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318d4a246e29106a/618d9fdbf71a3113890e9632/VAL_broll_EP03-3_Chamber_C.mp4';
    document.getElementById("hdescripcion4").innerHTML = "COLOCA una trampa que escanea los alrededores buscando enemigos. Cuando un enemigo visible entra en contacto, esta comienza una cuenta regresiva que, al terminar, desestabiliza el terreno a su alrededor y crea un área que permanece en la zona y ralentiza a los enemigos dentro de ella.";
    document.getElementById("ch1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch3").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("ch4").style.backgroundColor = "rgb(46, 38, 38)";
})
ch4.addEventListener('click', () => {
    video4.src = 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta111e90b3f2ce476/618d9fde3b08dd14d79a808f/VAL_broll_EP03-3_Chamber_X.mp4';
    document.getElementById("hdescripcion4").innerHTML = "ACTÍVALA para invocar un poderoso rifle de francotirador personalizado que mata a cualquier enemigo al que impacte directamente. Matar a un enemigo crea un área que permanece en la zona y ralentiza a los jugadores que queden dentro de ella.";
    document.getElementById("ch1").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch2").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch3").style.backgroundColor = "rgb(46, 38, 38)";
    document.getElementById("ch4").style.backgroundColor = "rgb(234,75,94)";
})

function cypher(){
    document.getElementById("sel1").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("sel1").style.opacity = "1";
    document.getElementById("sel2").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel2").style.opacity = "0.5";
    document.getElementById("sel3").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel3").style.opacity = "0.5";
    document.getElementById("sel4").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel4").style.opacity = "0.5";
    document.getElementById("box2").style.backgroundImage = "url(../images/cypher.png)";
    document.getElementById("nombre").innerHTML = "//Cypher";
    document.getElementById("biblio").innerHTML = "Cypher, el agente de información marroquí, es un sistema de vigilancia de un solo hombre que puede monitorear todos los movimientos de sus enemigos. No hay secreto que no descubra ni maniobra que no detecte. Cypher siempre está vigilando.";
    document.getElementById("mapimg").style.backgroundImage = "url(../images/haven.png)";
    document.getElementById("mapnombre").innerHTML = "Haven";
    document.getElementById("btn_cypher").style.display = "flex"
    document.getElementById("btn_sage").style.display = "none"
    document.getElementById("btn_kj").style.display = "none"
    document.getElementById("btn_chamber").style.display = "none"
}

function cypher_hab(){
    document.getElementById("popup1").style.display = "flex";
    document.getElementById("popup_fondo").style.display = "flex";
}

function popup_out(){
    document.getElementById("popup_fondo").style.display = "none";
    document.getElementById("popup1").style.display = "none";
    document.getElementById("popup2").style.display = "none";
    document.getElementById("popup3").style.display = "none";
    document.getElementById("popup4").style.display = "none";
}

function sage(){
    document.getElementById("sel1").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel1").style.opacity = "0.5";
    document.getElementById("sel2").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("sel2").style.opacity = "1";
    document.getElementById("sel3").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel3").style.opacity = "0.5";
    document.getElementById("sel4").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel4").style.opacity = "0.5";
    document.getElementById("box2").style.backgroundImage = "url(../images/sage.png)";
    document.getElementById("nombre").innerHTML = "//Sage";
    document.getElementById("biblio").innerHTML = "El bastión de China. Sage proporciona seguridad para sí misma y para su equipo en cualquier lugar. Gracias a su capacidad de revivir a sus compañeros caídos y evitar ataques agresivos, les da un lugar de protección en medio de la caótica pelea.";
    document.getElementById("mapimg").style.backgroundImage = "url(../images/icebox.png)";
    document.getElementById("mapnombre").innerHTML = "Icebox";
    document.getElementById("btn_cypher").style.display = "none"
    document.getElementById("btn_sage").style.display = "flex"
    document.getElementById("btn_kj").style.display = "none"
    document.getElementById("btn_chamber").style.display = "none"
}

function sage_hab(){
    document.getElementById("popup2").style.display = "flex";
    document.getElementById("popup_fondo").style.display = "flex";
}

function killjoy(){
    document.getElementById("sel1").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel1").style.opacity = "0.5";
    document.getElementById("sel2").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel2").style.opacity = "0.5";
    document.getElementById("sel3").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("sel3").style.opacity = "1";
    document.getElementById("sel4").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel4").style.opacity = "0.5";
    document.getElementById("box2").style.backgroundImage = "url(../images/killjoy.png)";
    document.getElementById("nombre").innerHTML = "//Killjoy";
    document.getElementById("biblio").innerHTML = "Killjoy, la prodigio de Berlín, asegura fácilmente el campo de batalla con un arsenal de dispositivos. Si el daño que inflige su equipamiento no detiene a sus enemigos, la debilitación de sus robots la ayudarán a aniquilarlos.";
    document.getElementById("mapimg").style.backgroundImage = "url(../images/bind.png)";
    document.getElementById("mapnombre").innerHTML = "Bind";
    document.getElementById("btn_cypher").style.display = "none"
    document.getElementById("btn_sage").style.display = "none"
    document.getElementById("btn_kj").style.display = "flex"
    document.getElementById("btn_chamber").style.display = "none"
}

function kj_hab(){
    document.getElementById("popup3").style.display = "flex";
    document.getElementById("popup_fondo").style.display = "flex";
}

function chamber(){
    document.getElementById("sel1").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel1").style.opacity = "0.5";
    document.getElementById("sel2").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel2").style.opacity = "0.5";
    document.getElementById("sel3").style.backgroundColor = "rgb(55, 54, 63)";
    document.getElementById("sel3").style.opacity = "0.5";
    document.getElementById("sel4").style.backgroundColor = "rgb(234,75,94)";
    document.getElementById("sel4").style.opacity = "1";
    document.getElementById("box2").style.backgroundImage = "url(../images/chamber.png)";
    document.getElementById("nombre").innerHTML = "//Chamber";
    document.getElementById("biblio").innerHTML = "Bien vestido y bien armado, el diseñador de armas francés Chamber repele agresores con una precisión mortal. Aprovecha su arsenal personalizado para mantener a los enemigos a raya y eliminarlos desde lejos. Siempre cuenta con la contingencia perfecta para cada plan.";
    document.getElementById("mapimg").style.backgroundImage = "url(../images/ascent.png)";
    document.getElementById("mapnombre").innerHTML = "Ascent";
    document.getElementById("btn_cypher").style.display = "none"
    document.getElementById("btn_sage").style.display = "none"
    document.getElementById("btn_kj").style.display = "none"
    document.getElementById("btn_chamber").style.display = "flex"
}

function chamber_hab(){
    document.getElementById("popup4").style.display = "flex";
    document.getElementById("popup_fondo").style.display = "flex";
}