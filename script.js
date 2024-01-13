var vCount = 1;
var mCount = 1;
var pCount = 1;
var toCount = 1;
var reCount = 1;
var lCount = 1;
var roCount = 1;
var cCount = 1;
var nCount = 1;
var tfCount = 1;

function addNumero(idButton){
  if (idButton === "VN"){
    var id = idButton + vCount;
    document.getElementById(id).innerHTML = vCount;
    if (vCount < 30){
        vCount = vCount + 1;
    }
    return vCount;
  }
  if (idButton === "MN"){
    var id = idButton + mCount;
    document.getElementById(id).innerHTML = mCount;
    if (mCount < 30){
        mCount = mCount + 1;
    }
    return mCount;
  }
  if (idButton === "PN"){
    var id = idButton + pCount;
    document.getElementById(id).innerHTML = pCount;
    if (pCount < 30){
        pCount = pCount + 1;
    }
    return pCount;
  }
  if (idButton === "TON"){
    var id = idButton + toCount;
    document.getElementById(id).innerHTML = toCount;
    if (toCount < 30){
        toCount = toCount + 1;
    }
    return toCount;
  }
  if (idButton === "REN"){
    var id = idButton + reCount;
    document.getElementById(id).innerHTML = reCount;
    if (reCount < 30){
        reCount = reCount + 1;
    }
    return reCount;
  }
  if (idButton === "LN"){
    var id = idButton + lCount;
    document.getElementById(id).innerHTML = lCount;
    if (lCount < 30){
        lCount = lCount + 1;
    }
    return lCount;
  }
  if (idButton === "RON"){
    var id = idButton + roCount;
    document.getElementById(id).innerHTML = roCount;
    if (roCount < 30){
        roCount = roCount + 1;
    }
    return roCount;
  }
  if (idButton === "CN"){
    var id = idButton + cCount;
    document.getElementById(id).innerHTML = cCount;
    if (cCount < 30){
        cCount = cCount + 1;
    }
    return cnCount;
  }
  if (idButton === "NN"){
    var id = idButton + nCount;
    document.getElementById(id).innerHTML = nCount;
    if (nCount < 30){
        nCount = nCount + 1;
    }
    return naCount;
  }
  if (idButton === "TFN"){
    var id = idButton + tfCount;
    document.getElementById(id).innerHTML = tfCount;
    if (tfCount < 30){
        tfCount = tfCount + 1;
    }
    return tfCount;
  }  
}

function suppNumero(idButton) {
    if (idButton === "VN"){
        if (vCount > 1){
            vCount = vCount - 1;
        }
        var id = idButton + vCount;
        document.getElementById(id).innerHTML = null;
        return vCount;
    }
    if (idButton === "MN"){
        if (mCount > 1){
            mCount = mCount - 1;
        }
        var id = idButton + mCount;
        document.getElementById(id).innerHTML = null;
        return mCount;
    }
    if (idButton === "PN"){
        if (pCount > 1){
            pCount = pCount - 1;
        }
        var id = idButton + pCount;
        document.getElementById(id).innerHTML = null;
        return pCount;
    }
    if (idButton === "TON"){
        if (toCount > 1){
            toCount = toCount - 1;
        }
        var id = idButton + toCount;
        document.getElementById(id).innerHTML = null;
        return toCount;
    }
    if (idButton === "REN"){
        if (reCount > 1){
            reCount = reCount - 1;
        }
        var id = idButton + reCount;
        document.getElementById(id).innerHTML = null;
        return reCount;
    }
    if (idButton === "LN"){
        if (lCount > 1){
            lCount = lCount - 1;
        }
        var id = idButton + lCount;
        document.getElementById(id).innerHTML = null;
        return lCount;
    }
    if (idButton === "RON"){
        if (roCount > 1){
            roCount = roCount - 1;
        }
        var id = idButton + roCount;
        document.getElementById(id).innerHTML = null;
        return roCount;
    }
    if (idButton === "CN"){
        if (cCount > 1){
            cCount = cCount - 1;
        }
        var id = idButton + cCount;
        document.getElementById(id).innerHTML = null;
        return cCount;
    }
    if (idButton === "NN"){
        if (nCount > 1){
            nCount = nCount - 1;
        }
        var id = idButton + nCount;
        document.getElementById(id).innerHTML = null;
        return nCount;
    }
    if (idButton === "TFN"){
        if (tfCount > 1){
            tfCount = tfCount - 1;
        }
        var id = idButton + tfCount;
        document.getElementById(id).innerHTML = null;
        return tfCount;
    }
}

/*function setColor(newColor){
    var test = document.getElementById("VN1");
    test.style.color = newColor;
}*/

/*
console.log(var) -> affchage
*/