export function executeCommand(args) {
  const command = args[0] || '--help';
  if (command === '--help') {
    console.log('Echo Analyzer Mdx v1.0.0 by @RosyDisarm');
    console.log('Commands: run, status, version');
  } else {
    console.log(`Executing ${command}...`);
  }
}