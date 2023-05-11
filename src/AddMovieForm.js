import React, { useState, useRef } from 'react'

export default function AddMovieForm() {

    return (
        <div>
        <fieldset>
            <legend>Lägg till en film</legend>
            <label for="title-field">Title:</label>
            <input type="text" id="title-field" class="form-conrol"></input>
            <lable for="rating-field">Betyg:</lable>
            <select type="text" id="rating-field" class="form-control">
                <option value="0">Välj betyg här...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>
        
            <input type="submit" class="btn btn-success mt-3" value="Spara film"></input>
        
        </fieldset>

        </div>      

   

    )


}