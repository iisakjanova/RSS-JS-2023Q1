import {
  API_URL,
  STOP,
  URL_ENDPOINT_GARAGE,
  URL_ENDPOINT_WINNERS,
} from "./constants";
import { CarData, WinnerData } from "./types";

export async function getCars() {
  try {
    const response = await fetch(`${API_URL}${URL_ENDPOINT_GARAGE}`);
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
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
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
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
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
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

    if (response.status === 500) {
      return STOP;
    }

    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return null;
  }
}

export async function createWinner(data: WinnerData) {
  try {
    const response = await fetch(`${API_URL}${URL_ENDPOINT_WINNERS}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return null;
  }
}

export async function updateWinner(data: WinnerData) {
  const bodyData = {
    wins: data.wins,
    time: data.time,
  };

  try {
    const response = await fetch(`${API_URL}winners/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return null;
  }
}

export async function getWinner(id: number) {
  try {
    const response = await fetch(`${API_URL}${URL_ENDPOINT_WINNERS}${id}`);
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return false;
  }
}

export async function getWinners() {
  try {
    const response = await fetch(`${API_URL}${URL_ENDPOINT_WINNERS}`);
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return false;
  }
}

export async function createCar(data: CarData) {
  try {
    const response = await fetch(`${API_URL}${URL_ENDPOINT_GARAGE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return null;
  }
}

export async function removeCar(id: number) {
  try {
    const response = await fetch(`${API_URL}${URL_ENDPOINT_GARAGE}${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return null;
  }
}

export async function removeWinner(id: number) {
  try {
    const response = await fetch(`${API_URL}${URL_ENDPOINT_WINNERS}${id}`, {
      method: "DELETE",
    });
    return await response.json();
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }

    return null;
  }
}
