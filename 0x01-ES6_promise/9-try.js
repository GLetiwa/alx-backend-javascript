// Function to guard the execution of a math function
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.toString()); // Convert error object to string and push the message
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
