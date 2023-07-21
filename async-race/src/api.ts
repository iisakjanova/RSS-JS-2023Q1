import { API_URL, STOP } from "./constants";

export type WinnerData = {
  [key: string]: number;
};

export async function getCars() {
  try {
    const response = await fetch(`${API_URL}garage/`);
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
    const response = await fetch(`${API_URL}winners`, {
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
    const response = await fetch(`${API_URL}winners/${id}`);
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
    const response = await fetch(`${API_URL}winners`);
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
