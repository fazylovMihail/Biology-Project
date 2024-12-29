function SendEmail(){
    const params = {
        support: document.getElementById("support").value,
    };
  
    const serviceID = "service_3lsv0x3";
    const templateID = "template_54bqmam";
  
    emailjs.send(serviceID, templateID, params)
    .then(()=>{
        document.getElementById("support").value = "";
        alert("Ваше сообщение отправлено!")
    })
}

export {SendEmail};