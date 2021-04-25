import { defineComponent, PropType, ExtractPropTypes } from 'vue'
import { getEventTarget } from '../../utils/plugins';

export type AImageUploaderProps = Readonly<ExtractPropTypes<typeof AImageUploader>>


export const AImageUploader = defineComponent({
  props: {
    header: {
      type: String,
    },
    description: {
      type: String,
    },
    multiple: {
      required: false,
      type: Boolean,
      default: false
    },
    onUpdateFiles: {
      required: true,
      type: Function as PropType<(files: File[]) => void>
    },
  },

  setup: (props, _cx, ) => {
    const { onUpdateFiles } = props;

    const onChangeFileList = (event: Event) => {
      const fileList = getEventTarget<HTMLInputElement>(event)?.files
      fileList && onUpdateFiles(Array.from(fileList))
    }

    return () => (
      <div class="bg-white shadow sm:rounded-lg">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
            {/* HEADER */}
            { addHeader(props) }

            {/* DROPZONE */}
            <div class="sm:col-span-6">
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type='file' accept="image/*" class="sr-only" onChange={onChangeFileList} multiple/>
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  { addFileHint(props) }
                </div>
              </div>
            </div>

            {/* IMAGE GALLERY */}
          </div>
        </div>
      </div>
    )
  }
})

const addFileHint = ({ fileTypeHint }: AImageUploaderProps ) => (
  fileTypeHint && <p class="text-xs text-gray-500">
    PNG, JPG, GIF up to 10MB
  </p>
)

const addHeader = ({ header, description }: AImageUploaderProps) => (
  header && <div>
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      { header }
    </h3>
    { description && <p class="mt-1 text-sm text-gray-500">{ description }</p> }
  </div>
)

export const Test = defineComponent({
  setup: () => {
    return () => (<AImageUploader header="Some Header" description="some Desc" onUpdateFiles={files => {console.log(files)}} multiple />)
  }
})