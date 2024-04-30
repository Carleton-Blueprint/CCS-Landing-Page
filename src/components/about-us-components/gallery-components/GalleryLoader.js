const importAll = (requireContext) => {
    const importedImages = [];
    requireContext.keys().forEach((imagePath, index) => {
      importedImages.push({
        galleryImage: {
          url: requireContext(imagePath).default,
          description: "Gallery Image " + index,
          id: index
        }
      });
    });
    return importedImages;
  };
  
  export default importAll;
  