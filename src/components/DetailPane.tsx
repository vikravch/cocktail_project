const DetailPane = () => (
  <main className="detail-pane">
    <div className="detail-hero">
      <img src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" alt="Placeholder" />
      <div className="hero-gradient"></div>
      <button className="bookmark-btn">
        <span className="material-symbols-outlined">favorite</span>
      </button>
    </div>

    <div className="detail-content-card">
      <button className="fab">
        <span className="material-symbols-outlined">add</span>
      </button>

      <div className="detail-header-row">
        <div>
          <div className="drink-tag">
            <span className="material-symbols-outlined">local_bar</span>
            <span className="text">Ordinary Drink</span>
          </div>
          <h1 className="detail-title">Margarita</h1>
          <div className="glass-type">
            <span className="material-symbols-outlined">liquor</span>
            <span>Glass: Cocktail glass</span>
          </div>
        </div>
        <div className="actions">
          <button className="btn-primary">
            <span className="material-symbols-outlined">add_circle</span>
            Start Mixing
          </button>
          <button className="btn-outline">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>

      <div className="detail-grid">
        <div>
          <div className="section-title">
            <div className="section-icon ingredients">
              <span className="material-symbols-outlined">format_list_bulleted</span>
            </div>
            <h3>Ingredients</h3>
          </div>
          <ul className="ingredients-list">
            <li className="ingredient-item">
              <span className="ingredient-name">Tequila</span>
              <span className="ingredient-amount">1 1/2 oz</span>
            </li>
            <li className="ingredient-item">
              <span className="ingredient-name">Triple sec</span>
              <span className="ingredient-amount">1/2 oz</span>
            </li>
            <li className="ingredient-item">
              <span className="ingredient-name">Lime juice</span>
              <span className="ingredient-amount">1 oz</span>
            </li>
            <li className="ingredient-item">
              <span className="ingredient-name">Salt</span>
              <span className="material-symbols-outlined">check_circle</span>
            </li>
          </ul>

          <div className="expert-tip">
            <div className="expert-tip-title">
              <span className="material-symbols-outlined">info</span>
              <span>Expert Tip</span>
            </div>
            <p className="expert-tip-text">Always use fresh lime juice for that signature zing!</p>
          </div>
        </div>

        <div>
          <div className="section-title">
            <div className="section-icon instructions">
              <span className="material-symbols-outlined">restaurant_menu</span>
            </div>
            <h3>Instructions</h3>
          </div>
          <div className="instructions-list">
            <div className="instruction-step">
              <div className="step-number">1</div>
              <div className="step-text">
                <p>Rub the rim of the glass with the lime slice to make the salt stick to it.</p>
              </div>
            </div>
            <div className="instruction-step">
              <div className="step-number">2</div>
              <div className="step-text">
                <p>Shake the other ingredients with ice, then carefully pour into the glass (taking care not to dislodge any salt).</p>
              </div>
            </div>
            <div className="instruction-step">
              <div className="step-number">3</div>
              <div className="step-text">
                <p>Garnish and serve immediately while cold.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="properties-grid">
        <div className="property-card">
          <p className="property-label">Strength</p>
          <p className="property-value">Medium</p>
        </div>
        <div className="property-card">
          <p className="property-label">Flavor</p>
          <p className="property-value">Zesty</p>
        </div>
        <div className="property-card">
          <p className="property-label">Calories</p>
          <p className="property-value">~150</p>
        </div>
        <div className="property-card">
          <p className="property-label">Difficulty</p>
          <p className="property-value">Easy</p>
        </div>
      </div>
    </div>
  </main>
);

export default DetailPane;
