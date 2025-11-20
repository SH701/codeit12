// app/page.tsx

"use client";

export default function Home() {
  return (
    <div>
      <button
        onClick={async () => {
          await fetch(
            "https://discord.com/api/webhooks/1440952295096324166/-6Mf96Xw7jPwxpJMs8ydswr1ABQcdChOn4oDTDp9_AffUMfUollPMkRU1h30uSXrg68d",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                content: "알림 테스트",
                username: "알림",
                embeds: [
                  {
                    title: "알림",
                    description: "알림",
                    fields: [{
                      name: "알림",
                      value: "알림",
                      inline: true,
                    }, {
                      name: "알림",
                      value: "알림",
                      inline: true,
                    }],
                    color: 255, 
                  }
                ]
              })
            },
          );
        }}
        className="rounded-md bg-blue-500 p-2 text-white"
      >
        discord로 알림보내기
      </button>
    </div>
  );
}
