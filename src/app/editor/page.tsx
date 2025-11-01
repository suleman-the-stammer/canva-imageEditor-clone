"use client";

import { Editor } from "@/features/editor/components/editor";
import { ResponseType } from "@/features/projects/api/use-get-project";
import { LOCAL_PROJECT_ID } from "@/features/projects/constants";

// Guest / demo editor: opens a blank canvas entirely in the browser.
// No authentication and no database are required. An empty `json` string
// makes the editor start from a fresh, empty artboard.
const guestProject = {
  id: LOCAL_PROJECT_ID,
  name: "Untitled design",
  json: "",
  width: 900,
  height: 1200,
  userId: "guest",
  thumbnailUrl: null,
  isTemplate: null,
  isPro: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
} as unknown as ResponseType["data"];

const GuestEditorPage = () => {
  return <Editor initialData={guestProject} />;
};

export default GuestEditorPage;
