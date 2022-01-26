import "./style.scss";

function IconUpload() {
  return (
    <div className="IconUpload_wrapper">
      <label htmlFor="upload">
        <i className="icon-upload fas fa-level-up-alt"></i>
      </label>
      <input type="file" id="upload" />
    </div>
  );
}

export default IconUpload;
