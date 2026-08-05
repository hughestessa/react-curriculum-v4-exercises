import styles from './SnackForm.module.css';
import { useState, useEffect } from 'react';

export default function SnackForm({
  addSnack,
  editingSnack,
  cancelEdit,
  updateSnack,
  className,
}) {
  const isEditing = Boolean(editingSnack);

  //Create state variables
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [touched, setTouched] = useState({ name: false, rating: false });

  //validate name
  function validateName() {
    return name.trim() !== '';
  }

  //validate name error
  function getNameError() {
    if (touched.name && !validateName()) return 'Name is required';
    return null;
  }

  //validate rating
  function validateRating() {
    return rating.trim() !== '' && rating.trim() >= '1' && rating.trim() <= '5';
  }

  //validate rating error
  function getRatingError() {
    if (touched.rating && !validateRating()) return 'Rating is required';
    return null;
  }

  //useEffect that runs when editingSnack changes
  useEffect(() => {
    //code here
    if (editingSnack) {
      setName(editingSnack.name);
      setRating(editingSnack.rating);
    } else {
      setName('');
      setRating('');
    }

    setTouched({ name: false, rating: false });
  }, [editingSnack]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateName()) {
      setTouched((prev) => ({ ...prev, name: true }));
      return;
    }

    if (!validateName() || !validateRating()) {
      setTouched({ name: true, rating: true });
      return;
    }

    if (isEditing) {
      updateSnack(editingSnack.id, name, rating);
    } else {
      addSnack(name, rating);
      setName('');
      setRating('');
      setTouched({ name: false, rating: false });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${className || ''}`}
    >
      <h3 className={styles['form-title']}>
        {isEditing ? '✏️ Edit Snack' : '➕ Add Snack'}
      </h3>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Name:</label>
        <input
          type="text"
          name="name"
          //defaultValue={isEditing ? editingSnack.name : ''}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, name: true }))}
          //required
          className={styles['field-input']}
          placeholder="Enter snack name"
        />
        {getNameError() && <p className="error">{getNameError()}</p>}
      </div>

      <div className={styles['field-container']}>
        <label className={styles['field-label']}>Rating:</label>
        <input
          type="number"
          name="rating"
          //defaultValue={isEditing ? editingSnack.rating : ''}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          onFocus={() => setTouched((prev) => ({ ...prev, rating: true }))}
          //required
          min="1"
          max="5"
          className={styles['field-input']}
          placeholder="Rate 1-5"
        />
        {getRatingError() && <p className="error">{getRatingError()}</p>}
      </div>

      <div className={styles['button-container']}>
        <button
          type="submit"
          className={`${styles.button} ${styles['submit-button']}`}
        >
          {isEditing ? 'Save' : 'Add'}
        </button>

        {isEditing && (
          <button
            type="button"
            onClick={cancelEdit}
            className={`${styles.button} ${styles['cancel-button']}`}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
