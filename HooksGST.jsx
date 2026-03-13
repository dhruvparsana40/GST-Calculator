import React from 'react'
import './Style.css'
function HooksGST(e){
  const [amount, setAmount] = React.useState('')
  const [gst, setGSt] = React.useState('')
  const [ans1, setAns1] = React.useState('')
  const [ans2, setAns2] = React.useState('')

  const onSubmit = ()=> {
    var a = parseFloat(amount)
    var b = parseFloat(gst)
    var c = (a * b)/100
    setAns1(c)

    if(gst == "0.25%") {
      var d = a + c
      setAns2(d)
    } else if(gst == "3%") {
      var d = a + c
      setAns2(d)
    } else if(gst == "5%") {
      var d = a + c
      setAns2(d)
    } else if(gst == "12%") {
      var d = a + c
      setAns2(d)
    } else if(gst == "18%") {
      var d = a + c
      setAns2(d)
    }else if(gst == "28%") {
      var d = a + c
      setAns2(d)
    }
  }

  return(<>
    <div className="gst-container">
      <h2 className="gst-title">GST Calculator</h2>
      Initial Amount :
      <input type='text' onChange={(e)=>setAmount(e.target.value)} />

      <select onChange={(e) => setGSt(e.target.value)}>
        <option value="-1">Select GST</option>
        <option>0.25%</option>
        <option>3%</option>
        <option>5%</option>
        <option>12%</option>
        <option>18%</option>
        <option>28%</option>
      </select>

      <input type='button' value='Calculate GST' onClick={onSubmit}/>

      <div className="result">
      Net Amount : <span>{amount}</span><br/>
      GST Amount : <span>{ans1}</span><br/>
      Total Amount : <span>{ans2}</span>
      </div>
</div>
  </>)
}
export default HooksGST
