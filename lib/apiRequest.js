import toast from "react-hot-toast";

export default async function makepostrequest(setloading,endpoint, data, resourceName, reset) {
    try {
        setloading(true);
        const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
        console.log(baseurl);
        const response = await fetch(`${baseurl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setloading(false);
            toast.success(`New ${resourceName} Created Successfully`);
            reset();
        } else {
            setloading(false);
            if (response.status===409) {
                toast.error("Stock is Not Enough");
            } else {
                // Accessing error message if available
                const errorMessage = await response.text();
                
                toast.error( "Something Went Wrong. Please Try Again...");
            }
        }
    } catch (error) {
        setloading(false);
        // Displaying error message from the error object
        toast.error( "An error occurred. Please try again later.");
    }
}
