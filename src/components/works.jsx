import React, { useState } from "react";

const photos = [
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
  "https://images.unsplash.com/photo-1494526585095-c41746248156",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  
];

export default function Works({ innerRef }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section ref={innerRef} >
      <div style={styles.gallery}>
        {photos.map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`Photo ${i + 1}`}
            style={styles.thumbnail}
            onClick={() => setSelectedPhoto(url)}
          />
        ))}
        
      </div>

      {selectedPhoto && (
        <div style={styles.modal} onClick={() => setSelectedPhoto(null)}>
          <span style={styles.closeBtn} onClick={() => setSelectedPhoto(null)}>
            &times;
          </span>
          <img
            src={selectedPhoto}
            alt="Fullscreen"
            style={styles.fullscreenImage}
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking image
          />
        </div>
      )}
    </section>
  );
}

const styles = {
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "100px",
    padding: "70px",
    backgroundColor: "black",
  },
  thumbnail: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    transition: "transform 0.2s",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    cursor: "zoom-out",
  },
  fullscreenImage: {
    maxWidth: "90vw",
    maxHeight: "90vh",
    borderRadius: "8px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
    cursor: "default",
  },
  closeBtn: {
    position: "fixed",
    top: "24px",
    right: "34px",
    fontSize: "48px",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none",
    zIndex: 1100,
  },

};


// import React, { useState } from "react";

// // Photos with optional grid item sizes (rowSpan, colSpan)
// const photos = [
//   { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", colSpan: 1, rowSpan: 1 },
//   { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", colSpan: 2, rowSpan: 2 },
//   { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80", colSpan: 3, rowSpan: 3 },
//   { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", colSpan: 4, rowSpan: 4 },
//   { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", colSpan: 2, rowSpan: 2 },
//   { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80", colSpan: 1, rowSpan: 1 },
//   { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", colSpan: 1, rowSpan: 1 },
//   { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", colSpan: 2, rowSpan: 2 },
//   { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80", colSpan: 1, rowSpan: 1 },
//   { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", colSpan: 1, rowSpan: 1 },
//   { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80", colSpan: 2, rowSpan: 2 },
//   { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80", colSpan: 1, rowSpan: 1 },
  
// ];

// export default function Works({ innerRef }) {
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   return (
    
//      <section
//       ref={innerRef} > 
//       <div style={galleryStyle}>
//         {photos.map(({ url, colSpan, rowSpan }, index) => (
//           <div
//             key={index}
//             style={{
//               gridColumnEnd: `span ${colSpan || 1}`,
//               gridRowEnd: `span ${rowSpan || 1}`,
//               cursor: "pointer",
//               overflow: "hidden",
//               borderRadius: "8px",
//               boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
//               position: "relative",
//             }}
//             onClick={() => setSelectedPhoto(url)}
//           >
//             <img
//               src={url}
//               alt={`Photo ${index + 1}`}
//               style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s" }}
//               onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//               draggable={false}
//             />
//           </div>
//         ))}
//       </div>

//       {selectedPhoto && (
//         <div style={modalStyle} onClick={() => setSelectedPhoto(null)}>
//           <span style={closeBtnStyle} onClick={() => setSelectedPhoto(null)}>
//             &times;
//           </span>
//           <img
//             src={selectedPhoto}
//             alt="Selected"
//             style={fullscreenImgStyle}
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </section>
//   );
// }

// // Gallery grid container style
// const galleryStyle = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
//   gridAutoRows: "200px",
//   gap: "20px",
//   padding: "12px",
//   maxWidth: "900px",
//   margin: "auto",
//   backgroundColor: "black",
// };

// // Modal fullscreen style
// const modalStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100vw",
//   height: "100vh",
//   backgroundColor: "rgba(0,0,0,0.85)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 1000,
//   cursor: "zoom-out",
// };

// // Fullscreen image style
// const fullscreenImgStyle = {
//   maxWidth: "90vw",
//   maxHeight: "90vh",
//   borderRadius: "8px",
//   boxShadow: "0 6px 20px rgba(0,0,0,0.7)",
//   cursor: "default",
// };

// // Close button style
// const closeBtnStyle = {
//   position: "fixed",
//   top: "24px",
//   right: "32px",
//   fontSize: "48px",
//   color: "white",
//   fontWeight: "bold",
//   cursor: "pointer",
//   userSelect: "none",
//   zIndex: 1100,
// };

