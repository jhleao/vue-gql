# vue-gql

Minimal Vue3 + GraphQL Codegen + Apollo setup.

Make sure to have [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) enabled in VSCode (not Vetur) for best TypeScript support.

## Running

```bash
yarn
yarn dev
```

## Adding new operations

1. Find the adequate subfolder and add your GraphQL operation to `src/graphql/` under a new file
2. Run `yarn generate` to generate the client
3. Use the generated client in your Vue components:

```vue
<script lang="ts">
import { defineComponent } from 'vue'
import { useGetUsersQuery } from '@/graphql/generated'

export default defineComponent({
  setup() {
    const { data, loading } = useGetUsersQuery()

    return {
      data,
      loading
    }
  }
})
</script>
```

## References

- [Vue Apollo Composable API](https://v4.apollo.vuejs.org/guide-composable)
- [GraphQL Codegen typescript-vue-apollo](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-vue-apollo)
