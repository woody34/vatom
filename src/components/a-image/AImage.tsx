import { defineComponent, PropType, ref, onMounted, reactive, Ref, onUnmounted, computed } from 'vue'

export const AImage = defineComponent({
  name: 'a-image',
  props: {
    src: String,
  },

  setup({ src }) {
    const showZoom = ref(false);

    const toggleShowZoom = () => {
      showZoom.value = !showZoom.value;
    };

    const zoomies = (e: MouseEvent): void => {
      const viewer = e.currentTarget as HTMLElement;
      if (!viewer || !showZoom) {
        return;
      }
      const offsetX = e.offsetX;
      const offsetY = e.offsetY;
      const x = (offsetX / viewer.offsetWidth) * 100;
      const y = (offsetY / viewer.offsetHeight) * 100;
      viewer.style.backgroundPosition = `${x}% ${y}%`;
    }

    const viewClasses = computed(() => `background-image: url(${src});cursor: ${showZoom.value ? 'zoom-out;' : 'zoom-in'}`)
    const imageClasses = computed(() => ['image block transition-all duration-500 ease-in-out w-full', showZoom.value && 'opacity-0'])

    return () => (
      <figure
        class="viewer overflow-hidden relative bg-center"
        style={viewClasses.value}
        onMousemove={zoomies}
        onClick={toggleShowZoom}
      >
        <img
          src={src}
          class={imageClasses.value}
        />
      </figure>
    )
  }
});


export const Test = defineComponent({
  setup: () => {
    return () => (
    <div style="   width: 600px;height: 600px;">
      <AImage src="https://25va3qc1hw-flywheel.netdna-ssl.com/wp-content/uploads/2011/03/An-American-Bison-aka-Buffalo-1280x640.jpg" />
    </div>
    )
  }
})
