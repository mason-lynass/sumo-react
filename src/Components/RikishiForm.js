import React, {useState, useEffect} from "react";

function RikishiForm ({onFormSubmit}) {
    
    const [formData, setFormData] = useState({
        shikona: "",
        rank: "",
        highestrank: "",
        yusho: "",
        kinboshi: "",
        fsAki: "",
        img: ""
      })

    function handleFormChange (e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value})
      }
    
      function handleFormSubmit(e) {
        console.log('submitted!')
        fetch(`http://localhost:4000/wrestlers`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then((newRikishi) => onFormSubmit(newRikishi))
      }
    
    return (
        <div>
            <form className="form" onSubmit={handleFormSubmit}>
                <h2>new rikishi form:</h2>
                <div className="formBorder">
                    <label for="shikona">shikona</label>
                    <input type="text" name="shikona" id="shikona" onChange={handleFormChange} value={formData.shikona} placeholder="Hakuho"/>
                    <label for="image">link to image</label>
                    <input type="link" name="img" id="img" onChange={handleFormChange} value={formData.img} placeholder="http://sumo.or.jp/img/sumo_data/rikishi/60x60/xxxxxxxx.jpg"/>
                    <label for="rank">rank</label>
                    <input type="text" name="rank" id="rank" onChange={handleFormChange} value={formData.rank} placeholder="Y, O, S, K, or #"/>
                    <label for="highest-rank">highest rank</label>
                    <input type="text" name="highestrank" id="highestRank" onChange={handleFormChange} value={formData.highestrank} placeholder="Y, O, S, K, or #"/>
                    <label for="yusho">yusho</label>
                    <input type="text" name="yusho" id="yusho" onChange={handleFormChange} value={formData.yusho} placeholder="#"/>
                    <label for="kinboshi">kinboshi</label>
                    <input type="text" name="kinboshi" id="kinboshi" onChange={handleFormChange} value={formData.kinboshi} placeholder="#"/>
                    <label for="fsAki">fantasy sumo points last basho</label>
                    <input type="text" name="fsAki" id="fsAki" onChange={handleFormChange} value={formData.fsAki} placeholder="#"/>
                    <input type="submit" id="submit" /> 
                </div>
            </form>
        </div>
    )
}

export default RikishiForm