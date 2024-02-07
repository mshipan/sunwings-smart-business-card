import { useState } from "react";
import Card from "../../../components/dashboard/allCards/Card";
import CardModal from "../../../components/modals/CardModal";

const AllCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <h1 className="text_db_36 mb-3">All Cards Info</h1>
      <button onClick={openModal} className="U_btn">
        Add a Card
      </button>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <CardModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default AllCards;
