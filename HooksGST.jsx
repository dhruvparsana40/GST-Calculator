import React from 'react'
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

    Initial Amount : <input type='text' onChange={(e)=>setAmount(e.target.value)} /><br/>

    {/* Dropdown button */}
    <select onChange={(e) => setGSt(e.target.value)}>
      <option value="-1" >Select</option>
      <option> 0.25% </option>
      <option> 3% </option>
      <option> 5% </option>
      <option> 12% </option>
      <option> 18% </option>
      <option> 28% </option>
    </select>

    {/* radio button */}
    {/* <label onChange={(e)=> setGSt(e.target.value)}>
      <input type='radio' name='option' value='0.25%'/> 0.25% <br/>
      <input type='radio' name='option' value='3%'/> 3% <br/>
      <input type='radio' name='option' value='5%'/> 5% <br/>
      <input type='radio' name='option' value='12%'/> 12% <br/>
      <input type='radio' name='option' value='18%'/> 18% <br/>
      <input type='radio' name='option' value='28%'/> 28% <br/>
    </label> */}

    <input type='button' value='GST' onClick={onSubmit}/><br/>
    Net Amount : {amount}<br/>
    GST Amount : {ans1}<br/>
    Total Amount : {ans2}<br/>
    
  </>)
}
export default HooksGST
