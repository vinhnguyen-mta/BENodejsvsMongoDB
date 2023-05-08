import { validationResult } from "express-validator";
import { EventEmitter } from 'node:events'
import { userRespositories } from '../repositories/index.js'

const myEvent = new EventEmitter()
// listen
myEvent.on('event.register.user', (params)=>{
  console.log(`They taked about : ${JSON.stringify(params)}`)
})

const login = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ errors: error.array() });
  }
  const { email, password } = req.body;
 await userRespositories.login({email, password})
  res.status(200).json({
    message: "login successfully",
    data : "detail here "
  })
};

const register =  async  (req, res)=>{

  const {name, email, languages, gender, phoneNumber, address} = req.body
  await userRespositories.register({name, email, languages, gender, phoneNumber, address})

myEvent.emit('event.register.user', {email, address, phoneNumber})
  res.status(201).json({
    message: "register successfully"
  })
}

const getDetailUser = async (req, res)=>{

}

export default {
    login, register, getDetailUser
}