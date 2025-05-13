import React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Icons } from "@/components/ui/icons";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="flex flex-col gap-6 max-w-5xl w-full">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-slate-900"></div>
            <span className="font-semibold text-lg text-slate-900">shadcn/ui</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
            Beautifully designed components <br />
            built with RadixUI and Tailwind CSS
          </h1>
        </div>

        {/* Main Content */}
        <div className="flex items-end gap-14 mt-6">
          {/* Left Column */}
          <div className="flex flex-col gap-11">
            <RadioGroup defaultValue="comfortable" className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="default" id="default" />
                <label htmlFor="default" className="font-medium text-sm">Default</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="comfortable" id="comfortable" />
                <label htmlFor="comfortable" className="font-medium text-sm">Comfortable</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="compact" id="compact" />
                <label htmlFor="compact" className="font-medium text-sm">Compact</label>
              </div>
            </RadioGroup>

            <Popover>
              <PopoverTrigger asChild>
                <div className="w-[320px] rounded-md border border-slate-200 p-4 shadow-sm">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-base">Dimensions</h3>
                    <p className="text-sm text-slate-500">Set the dimensions for the layer.</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="text-sm font-medium">Width</label>
                      <div className="flex-1 rounded-md border border-slate-200 px-3 py-2">
                        <span className="text-sm">100%</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="text-sm font-medium">Max. width</label>
                      <div className="flex-1 rounded-md border border-slate-200 px-3 py-2">
                        <span className="text-sm">300px</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="text-sm font-medium">Height</label>
                      <div className="flex-1 rounded-md border border-slate-200 px-3 py-2">
                        <span className="text-sm">25px</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 w-full">
                      <label className="text-sm font-medium">Max. height</label>
                      <div className="flex-1 rounded-md border border-slate-200 px-3 py-2">
                        <span className="text-sm">none</span>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Dimensions</h4>
                  <p className="text-sm text-slate-500">Set the dimensions for your content.</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col gap-14">
              <div className="flex items-center gap-10">
                <div className="flex items-center gap-2">
                  <Switch id="airplane-mode" />
                  <label htmlFor="airplane-mode" className="text-sm font-medium">Airplane mode</label>
                </div>
                <Button>Continue</Button>
              </div>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-4 p-4 rounded-md border border-slate-200 shadow-sm w-[350px]">
                    <div className="h-12 w-12 bg-slate-800 rounded-full"></div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm text-slate-900">@nextjs</span>
                      <span className="text-sm text-slate-900">The React Framework - created and maintained by @vercel</span>
                      <div className="flex items-center gap-1 mt-2">
                        <Icons.calendar className="h-4 w-4 text-slate-500" />
                        <span className="text-xs text-slate-500">Joined December 2021</span>
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent>
                  <div className="flex flex-col gap-2">
                    <h4 className="font-medium">@nextjs</h4>
                    <p className="text-sm">The React Framework for Production</p>
                  </div>
                </HoverCardContent>
              </HoverCard>

              <Tabs defaultValue="account" className="w-[350px]">
                <TabsList className="w-full bg-slate-100 p-1 rounded-md">
                  <TabsTrigger value="account" className="flex-1 rounded-sm data-[state=active]:bg-white">Account</TabsTrigger>
                  <TabsTrigger value="password" className="flex-1 rounded-sm text-slate-500">Password</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>

          <div className="w-full flex justify-center">
          <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Icons.user className="mr-2 h-4 w-4" />
                    <span>Profile Item</span>
                    <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.creditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Icons.users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.creditCard className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                    <Icons.externalLink className="ml-auto h-4 w-4 opacity-50" />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.plus className="mr-2 h-4 w-4" />
                    <span>New team</span>
                    <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Icons.users className="mr-2 h-4 w-4" />
                    <span>Github</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Icons.creditCard className="mr-2 h-4 w-4" />
                    <span>Support</span>
                    <Icons.externalLink className="ml-auto h-4 w-4 opacity-50" />
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <Icons.creditCard className="mr-2 h-4 w-4 opacity-50" />
                    <span className="opacity-50">API</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Icons.logOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-8 mt-10 justify-between">
          <p className="text-base text-slate-500">This figma file was made with love by @skirano</p>
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="bg-slate-900 text-white px-3 py-1.5 rounded-md text-sm font-medium">Beta</div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a beta version</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="text-sm font-medium">v1.0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;