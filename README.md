# InternTestBackend
 
# Install all the dependencies for express js
cd to the right directory
example cd InternTestBackend
npm install 

# hosting backend on the local server, it will host it in localhost:3000
node app.js

# Message in the file
all the data is being store in the constant variable list  - List_of_Messages
Currently there are only 3 messages in the list


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


# ViewMessage
View all the Message for the particular user, including inbox and outbox
localhost:3000/ViewMessage?user=munHong1
The output
[
    {
        "sender": "munHong1",
        "Recipient": "munHong",
        "Date created": "19/9/2020",
        "Title": "Pls reply",
        "Message": "important"
    }
]

# Inbox
View all the Message in the inbox for the user, (user is the Recipient)
Endpoint for listing the inbox message
localhost:3000/inbox?user=munHong
The output
[
    {
        "sender": "munHong1",
        "Recipient": "munHong",
        "Date created": "19/9/2020",
        "Title": "Pls reply",
        "Message": "important"
    },
    {
        "sender": "Tai",
        "Recipient": "munHong",
        "Date created": "19/9/2020",
        "Title": "Reply",
        "Message": "No Message"
    }
]


# Outbox
View all the Message in the inbox for the user, (user is the sender)
Endpoint for listing the outbox message
localhost:3000/outbox?user=munHong
The output 
[
    {
        "sender": "munHong",
        "Recipient": "Tai",
        "Date created": "19/9/2020",
        "Title": "HelloWorld",
        "Message": "Message"
    }
]



