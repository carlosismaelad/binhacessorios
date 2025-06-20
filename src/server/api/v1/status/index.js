export default function status() {
  return {
    status: "API ok!",
    timestamp: new Date().toISOString(),
  };
}

function somar(a, b) {
  return a + b;
}
