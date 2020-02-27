{{- define "obj.fullname" -}}
{{- printf "%s" .Release.Name }}
{{- end -}}