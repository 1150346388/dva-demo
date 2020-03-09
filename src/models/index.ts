const context = (require as any).context('./', false, /\.ts$/)
console.log(context.keys())
export default context
  .keys()
  .filter(item => item !== './index.ts')
  .map(key => context(key))
