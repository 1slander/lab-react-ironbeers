import Navbar from "../components/Navbar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleNameInput = (e) => setName(e.target.value);
  const handleTaglineInput = (e) => setTagline(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleFirstBrewedInput = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTipsInput = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLvlInput = (e) => setAttenuationLevel(e.target.value);
  const handleContributedByInput = (e) => setContributedBy(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
    try {
      const res = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setName("");
      setTagline("");
      setDescription("");
      setFirstBrewed("");
      setBrewersTips("");
      setAttenuationLevel(1);
      setContributedBy("");
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Add New Beer</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTaglineInput}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionInput}
        />
        <label>First brewed:</label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewedInput}
        />
        <label>Brewers tips:</label>
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={handleBrewersTipsInput}
        />
        <label>Attenuation level:</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLvlInput}
        />
        <label>Contributed By:</label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handleContributedByInput}
        />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
};
export default NewBeer;
