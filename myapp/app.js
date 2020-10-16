const express = require('express')
const app = express()
const port = 3000




var message1 = {
  "sender": "munHong1",
  "Recipient": "munHong",
  "Date created": "19/9/2020",
  "Title": "Pls reply",
  "Message": "important"

}

var message2 = {
  "sender": "Tai",
  "Recipient": "munHong",
  "Date created": "19/9/2020",
  "Title": "Reply",
  "Message": "No Message"

}


var message3 ={
  "sender": "munHong",
  "Recipient": "Tai",
  "Date created": "19/9/2020",
  "Title": "HelloWorld",
  "Message": "Message"

}

const list_of_Message = [message1, message2, message3] 



// View all the Message
app.get('/ViewMessage', (req, res) => {
  Message_Output = []
  username = req.query.user
  for (let i=0; i<list_of_Message.length ;i++){
    if (list_of_Message[i].Recipient == username){
        Message_Output.push(list_of_Message[i])
    }
  }

  for (let i=0; i<list_of_Message.length ;i++){
    if (list_of_Message[i].sender == username){
        Message_Output.push(list_of_Message[i])
    }
  }

  if (Message_Output.length == 0){
    res.send("No Recipient/Sender can be found ")

  }
  else{
     res.send(Message_Output)
  }
  


})



//Recipient
app.get('/inbox', (req, res) => {
  Message_Output = []
  username = req.query.user
  for (let i=0; i<list_of_Message.length ;i++){
      if (list_of_Message[i].Recipient == username){
          Message_Output.push(list_of_Message[i])
      }
  }
  if (Message_Output.length == 0){
    res.send("No Recipient Found ")

  }
  else{
     res.send(Message_Output)
  }
  
})


//Sender
app.get('/outbox', (req, res) => {
  Message_Output = []
  username = req.query.user
  for (let i=0; i<list_of_Message.length ;i++){
      if (list_of_Message[i].sender == username){
          Message_Output.push(list_of_Message[i])
      }
  }

  
  if (Message_Output.length == 0){
    res.send("No Recipient Found ")

  }
  else{
     res.send(Message_Output)
  }

})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})