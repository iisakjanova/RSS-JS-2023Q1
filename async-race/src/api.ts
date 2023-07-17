import { API_URL, STOP } from "./constants";

export async function getCars() {
  try {
    const response = await fetch(`${API_URL}garage/`);

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

export async function startEngine(id: number) {
  try {
    const response = await fetch(`${API_URL}engine?id=${id}&status=started`, {
      method: "PATCH",
    });

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

export async function stopEngine(id: number) {
  try {
    const response = await fetch(`${API_URL}engine?id=${id}&status=stopped`, {
      method: "PATCH",
    });

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

export async function setDriveMode(id: number) {
  try {
    const response = await fetch(`${API_URL}engine?id=${id}&status=drive`, {
      method: "PATCH",
    });

    if (!response.ok) {
      if (response.status === 500) {
        return STOP;
      }

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
