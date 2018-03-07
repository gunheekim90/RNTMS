1. Introduce Typescript, Ref: http://blog.novanet.no/easy-typescript-with-react-native/

2. yarn add --dev react-native-typescript-transformer typescript  

3. rn-cli.config.js

<code>
module.exports = {  
  getTransformModulePath() {
    return require.resolve('react-native-typescript-transformer')
  },
  getSourceExts() {
    return ['ts', 'tsx'];
  }
}
</code>

4. tsconfig.json

<code>
{
  "compilerOptions": {
    "target": "es2015",
    "module": "es2015",
    "jsx": "react-native",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true
  }
}
</code>

5. run: react-native start

6. run: react-native run-android

7. Then, You can run typescript file without build