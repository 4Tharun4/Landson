import {createUploadthing} from "uploadthing/next"

const f= createUploadthing();

export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    CategoryImageUploader: f({ image: { maxFileSize: "5MB" } })
      // Set permissions and file types for this FileRoute

      .onUploadComplete(async ({ metadata, file }) => {
        console.log("file url ", file.url,metadata);
   
        return { uploadedBy :"Tharun G V"}
      }),
      // Define as many FileRoutes as you like, each with a unique routeSlug
      ProductImageUpload: f({ image: { maxFileSize: "5MB" } })
    // Set permissions and file types for this FileRoute

    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url ", file.url,metadata);
 
      return { uploadedBy :"Tharun G V"}
    }),
    // Define as many FileRoutes as you like, each with a unique routeSlug
    DealerImageUpload: f({ image: { maxFileSize: "5MB" } })
      // Set permissions and file types for this FileRoute

      .onUploadComplete(async ({ metadata, file }) => {
        console.log("file url ", file.url,metadata);
   
        return { uploadedBy :"Tharun G V"}
      }),
    }