import ResizableHandleDemo from "@/divs/2-siderbar-content.tsx";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
  export function ResizableDemo() {
    return (
        
<ResizablePanelGroup
  direction="vertical"
  className="flex flex-col min-h-[200px] w-full max-w-full rounded-lg border"
>
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={100}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">
      <ResizableHandleDemo />
      </span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>

    )
  }
  export default ResizableDemo;