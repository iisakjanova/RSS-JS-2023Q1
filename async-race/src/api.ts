async function startEngine(id: number) {
  try {
    const response = await fetch(
      `http://localhost:3000/engine?id=${id}&status=started`,
      {
        method: "PATCH",
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong...");
    }

    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      // Handle the specific error
      console.error("Error:", error.message);
    } else {
      // Handle other unknown errors
      console.error("Unknown error:", error);
    }

    return null;
  }
}

export default startEngine;
