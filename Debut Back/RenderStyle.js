function renderStyle() {
  let elements = document.querySelectorAll("*");
  let getStyle = [];
  let styleText = [];
  let attrStyle = undefined;
  let styleElement = document.createElement("style");
  elements.forEach((element) => {
    if (
      element.hasAttribute("class") &&
      element.getAttribute("class").length > 0
    ) {
      attrStyle = element.getAttribute("class").trim().replace(/  +/g, " ");
      attrStyle = attrStyle.split(" ");
      getStyle.push(...attrStyle);
    }
  });
  getStyle = [...new Set(getStyle)];
  getStyle = getStyle.map((clase) => clase.trim());

  // --------------- @ -------------------

  for (const clase of getStyle) {
    // WIDTH
    if (/^w-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{width:${clase.slice(2)}rem}`);
    }
    if (/^w-[0-9]+p$/.test(clase)) {
      styleText.push(`.${clase}{width:${clase.slice(2, clase.length - 1)}%}`);
    }
    // HEIGHT
    if (/^h-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{height:${clase.slice(2)}rem}`);
    }
    if (/^h-[0-9]+p$/.test(clase)) {
      styleText.push(`.${clase}{height:${clase.slice(2, clase.length - 1)}%}`);
    }
    // PADDING
    if (/^p-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{padding:${clase.slice(2)}rem}`);
    }
    if (/^pt-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{padding-top:${clase.slice(3)}rem}`);
    }
    if (/^pb-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{padding-bottom:${clase.slice(3)}rem}`);
    }
    if (/^pl-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{padding-left:${clase.slice(3)}rem}`);
    }
    if (/^pr-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{padding-right:${clase.slice(3)}rem}`);
    }

    // MARGIN
    if (/^m-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{margin:${clase.slice(2)}rem}`);
    }

    // FONT SIZE
    if (/^fs-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{font-size:${clase.slice(3)}rem}`);
    }
    // BORDER RADIUS
    if (/^br-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{border-radius:${clase.slice(3)}rem}`);
    }
    if (/^br-[0-9]+p$/.test(clase)) {
      styleText.push(`.${clase}{border-radius:${clase.slice(3,clase.length-1)}%}`);
      
    }
    //  GAP
    if (/^gap-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{gap:${clase.slice(4)}rem}`);
    }
    // BACKGROUND
    if (/^bg-[a-z]+$/.test(clase)) {
      styleText.push(`.${clase}{background-color:${clase.slice(3)}}`);
    }
    if (/^bg-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{background-color:hsl(${clase.slice(3)},100%,50%)}`);
    }
    if (/^bg-[0-9]+-[0-9]+$/.test(clase)) {
      let n = clase.split("-")
      styleText.push(`.${clase}{background-color:hsl(${n[1]},100%,${n[2]}%)}`);
    }
    if (/^bg-[0-9]+-[0-9]+-[0-9]+$/.test(clase)) {
      let n = clase.split("-")
      styleText.push(`.${clase}{background-color:hsl(${n[1]},${n[2]}%,${n[3]}%)}`);
    }
    // COLOR
    if (/^c-[a-z]+$/.test(clase)) {
      styleText.push(`.${clase}{color:${clase.slice(2)}}`);
    }
    if (/^c-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{color:hsl(${clase.slice(2)},100%,50%)}`);
    }
    if (/^c-[0-9]+-[0-9]+$/.test(clase)) {
      let n = clase.split("-")
      styleText.push(`.${clase}{color:hsl(${n[1]},100%,${n[2]}%)}`);
    }
    if (/^c-[0-9]+-[0-9]+-[0-9]+$/.test(clase)) {
      let n = clase.split("-")
      styleText.push(`.${clase}{color:hsl(${n[1]},${n[2]}%,${n[3]}%)}`);
    }
    // FONT WEIGHT
    if (/^fw-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{font-weight:${clase.slice(3)}}`);
    }
    // DISPLAY
    if (/^d-[a-z]+$/.test(clase)) {
      styleText.push(`.${clase}{display:${clase.slice(2)}}`);
    }
    // FLEX-GROW
    if (/^fgw-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{flex-grow:${clase.slice(4)}}`);
    }
    // BOX SHADOW
    if (/^bxs-[0-9]+$/.test(clase)) {
      styleText.push(`.${clase}{display:${clase.slice(2)}}`);
    }
  }
  // --------------- @ -------------------
  styleElement.innerHTML = styleText.join(" ");
  document.head.appendChild(styleElement);
  // console.log(getStyle);
  // console.log(styleText);
}
renderStyle();