import createHashHistory from 'history/lib/createHashHistory';

export default function withExampleBasename(history,dirname){
  return useBasename(() => history)({basename:`#/${dirname}`})
}
