export default function css<TProps>(
  val: TemplateStringsArray,
  ...args: Array<
    | string
    | number
    | string[]
    | ((props: TProps) => string | string[] | undefined | boolean)
  >
) {
  const result: unknown[] = [];

  val.forEach((v, i) => {
    if (v) {
      result.push(v);
    }

    if (args[i]) {
      result.push(args[i]);
    }
  });

  return result as string[];
}
