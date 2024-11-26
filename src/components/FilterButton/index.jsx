import "./styles.css";

const FilterButton = ({ content, onClick, selectedCategory, icon }) => {
  const isSelected = selectedCategory === content;

  return (
    <div className="flex flex-col items-center">
      {/* Botón circular */}
      <button
        className={isSelected ? "filter__button filter__button__select" : "filter__button"}
        onClick={onClick}
      >
        {icon && (
          <img
            src={icon}
            alt={content}
            className="object-contain" // Ajusta el tamaño según diseño
          />
        )}
      </button>

      {/* Texto debajo del botón */}
      <span
        className={isSelected ? "filter__text filter__button__span__selected" : "filter__text"}
      >
        {content}
      </span>
    </div>
  );
};

export default FilterButton;
