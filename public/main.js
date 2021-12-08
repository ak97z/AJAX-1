// console.log('你好1')

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    console.log("监听到css事件!");
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.onerror = () => {
    console.log("fail监听到css事件!");
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    console.log("监听到2.js事件!");
    const script = document.createElement("script");
    script.innerHTML = request.response;
    document.body.appendChild(script);
  };
  request.onerror = () => {
    console.log("fail监听到2.JS事件!");
  };
  request.send();
};
let n = 1
getpage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n+1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
        
      });
      console.log("下一页!");
      n+=1
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // const dom = request.responseXML;
      // const text = request.responseXML.getElementsByTagName("warning")[0].textContent;
      console.log(
        request.responseXML
          .getElementsByTagName("warning")[0]
          .textContent.trim()
      );
    }
  };
  request.send();
};

// getXML.onclick = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", "/4.xml");
//     request.onreadystatechange = () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const dom = request.responseXML;
//         const text = dom.getElementsByTagName("warning")[0].textContent;
//         console.log(text.trim());
//       }
//     };
//     request.send();
//   };

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  //   console.log(request.open);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.response);
      const object = JSON.parse(request.response);
      myname.textContent = object.name;
      console.log("监听到5.JSON事件!");
    }
  };
  request.send();
};

getJS.onclick = () => {
  const request = new XMLHttpRequest(); //readystate = 0
  request.open("GET", "/2.js"); //readystate = 1
  request.onreadystatechange = () => {
  
      if (request.readyState === 4 && request.status === 200) {
        //  创建标签
        const script = document.createElement("script");
        // 填写内容
        script.innerHTML = request.response;
        // 把标签插入原文件
        document.body.appendChild(script);
      } 
  };
  request.onerror = () => {
    console.log("fail监听到2.JS事件!");
  };
  request.send();
}; //readystate = 2

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onload = () => {
    console.log("监听到3.html事件!");
    const html = document.createElement("html");
    html.innerHTML = request.response;
    document.body.appendChild(html);
  };
  request.onerror = () => {
    console.log("fail监听到3.html事件!");
  };
  request.send();
};
